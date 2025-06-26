import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ À ajouter
import { Facture } from '../model/facture.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FactureService {
  private apiUrl = 'api/factures';

  constructor(private http: HttpClient) {}

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiUrl);
  }

  ajouterFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiUrl, facture);
  }

  supprimerFacture(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
