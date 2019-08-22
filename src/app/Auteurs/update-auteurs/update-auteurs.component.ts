import { Component, OnInit } from '@angular/core';
import { AuteurService } from 'src/app/services/auteur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-auteurs',
  templateUrl: './update-auteurs.component.html',
  styleUrls: ['./update-auteurs.component.css']
})
export class UpdateAuteursComponent implements OnInit {
  auteurForm: FormGroup;
  auteurID: any;
  auteurData: any;

  constructor(
    private auteurService: AuteurService,
    private router: Router,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
     // using the Validators for implementing the form validation
     this.auteurForm = this.fb.group({
      nom: ['', Validators.compose([Validators.required])], 
      prenom: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.auteurID = this.actRoute.snapshot.params.id;
    this.loadauteurDetails(this.auteurID);
  }

  loadauteurDetails(auteurID) {
    this.auteurService.getAuteurDetails(auteurID).subscribe(auteur => {
      this.auteurData = auteur;
      this.auteurForm.controls['nom'].setValue(this.auteurData['nom']);
      this.auteurForm.controls['prenom'].setValue(this.auteurData['prenom']);
    });
  }

  updateauteurData(values) {
    const auteurData = new FormData();
    auteurData.append('id', this.auteurID);
    auteurData.append('nom', values.nom);
    auteurData.append('prenom', values.prenom);
    this.auteurService.updateAuteur(auteurData).subscribe(result => {
      this.router.navigate(['']);
    });
  }

}
