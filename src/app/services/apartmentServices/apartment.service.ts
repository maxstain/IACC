import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Apartment } from 'src/app/models/apartment';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  apartments: Apartment[] = [];
  baseUrl = "http://localhost:3000/apartments";

  constructor(private http: HttpClient) {
    this.getApartments();
  }

  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.baseUrl).pipe(
      tap((list) => (this.apartments = list)),
      catchError((err) => {
        console.error('Failed to load apartments', err);
        return of([] as Apartment[]);
      })
    )
  }


  getApartmentById(id: number | string): Observable<Apartment> {
    const safeId = typeof id === 'string' ? encodeURIComponent(id) : id;
    return this.http.get<Apartment>(`${this.baseUrl}/${safeId}`).pipe(
      catchError((err) => {
        console.error('Failed to fetch apartment', err);
        return throwError(() => err); // propagate error to the subscriber
      })
    );
  }


  addApartment(apartment: Omit<Apartment, 'id'>): Observable<Apartment> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Apartment>(this.baseUrl, apartment, { headers }).pipe(
      tap((created) => {
        this.apartments = [...this.apartments, created];
      }),
      catchError((err) => {
        console.error('Failed to add apartment', err);
        return throwError(() => err);
      })
    );
  }

  deleteApartment(apartmentId: number | string): Observable<Apartment> {
    const url = `${this.baseUrl}/${encodeURIComponent(String(apartmentId))}`;
    return this.http.delete<Apartment>(url).pipe(

      tap(() => {
        // keep local cache in sync (optional)
        this.apartments = this.apartments.filter(a => String(a.id) !== String(apartmentId));
      }),
      catchError(err => {
        console.error('Failed to delete apartment', err);
        return throwError(() => err);
      })
    );
  }


}
