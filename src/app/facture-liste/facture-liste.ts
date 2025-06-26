import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Facture } from '../model/facture.model';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-facture-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './facture-liste.html',
  styleUrls: ['./facture-liste.css']
})
export class FactureListe implements OnInit {
  factures: Facture[] = [];
  factureForm: FormGroup;
  colonnes: string[] = ['designation', 'quantite', 'prixUnitaire'];

  constructor(private fb: FormBuilder, private factureService: FactureService) {
    this.factureForm = this.fb.group({
      designation: ['', Validators.required],
      quantite: [1, [Validators.required, Validators.min(1)]],
      prixUnitaire: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe(data => {
      this.factures = data;
    });
  }
 get totalGeneral(): number {
  const total = this.factures.reduce((total, facture) => total + facture.quantite * facture.prixUnitaire, 0);
  console.log('totalGeneral recalculé:', total);
  return total;
}
 ajouterFacture() {
  if (this.factureForm.valid) {
    const nouvelle: Facture = this.factureForm.value;
    this.factureService.ajouterFacture(nouvelle).subscribe({
      next: factureAjoutee => {
        console.log('Facture ajoutée depuis API', factureAjoutee);
        this.factures = [...this.factures, factureAjoutee];
        this.factureForm.reset({ designation: '', quantite: 1, prixUnitaire: 0 });
      },
      error: err => {
        console.error('Erreur ajout facture', err);
      }
    });
  }
}
}
