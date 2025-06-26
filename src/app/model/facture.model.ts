export interface Facture {
  id?: number;          // id optionnel, généré automatiquement par in-memory-web-api
  designation: string;
  quantite: number;
  prixUnitaire: number;
}