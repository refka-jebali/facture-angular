import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Facture } from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const factures: Facture[] = [
      { id: 1, designation: 'pull', quantite: 5, prixUnitaire: 10 },
      { id: 2, designation: 'robe', quantite: 1, prixUnitaire: 20 },
      { id: 3, designation: 'pantalon', quantite: 2, prixUnitaire: 15 },
      { id: 4, designation: 'chemise', quantite: 2, prixUnitaire: 17 }
    ];
    return { factures };
  }
}
