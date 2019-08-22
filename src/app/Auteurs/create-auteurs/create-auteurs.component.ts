import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuteurService } from 'src/app/services/auteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-auteurs',
  templateUrl: './create-auteurs.component.html',
  styleUrls: ['./create-auteurs.component.css']
})
export class CreateAuteursComponent implements OnInit {
  auteurForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private Auteurservice: AuteurService,
    private router: Router
  ) {
    // using the Validators for implementing the form validation
    this.auteurForm = this.fb.group({
      nom: ['', Validators.compose([Validators.required])], 
      prenom: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
  }
  // method for saving the auteur
  saveauteur(values: {  nom: string; prenom: string }) {
    // we are using form data for preparing the form value. We avoid the JSON encoding and decoding method via HTTP requests.
    const auteurData = new FormData();
    auteurData.append('nom', values.nom);
    auteurData.append('prenom', values.prenom);
    // accessing the create product service to save the product into the database
    this.Auteurservice.createAuteur(auteurData).subscribe(result => {
      // Once the product created successfully, we will redirect to the root page
      this.router.navigate(['']);
    });
  }

}
