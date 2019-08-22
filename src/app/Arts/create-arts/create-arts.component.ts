import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArtService } from 'src/app/services/art.service';
import { AuteurService } from 'src/app/services/auteur.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-arts',
  templateUrl: './create-arts.component.html',
  styleUrls: ['./create-arts.component.css']
})
export class CreateArtsComponent implements OnInit {
  artForm: FormGroup;
  public auteurs: any = [];



  constructor(
    private fb: FormBuilder,
    private artService: ArtService,
    private router: Router,
    private auteurservice: AuteurService,
  ) {
    // using the Validators for implementing the form validation
    this.artForm = this.fb.group({
      titre: ['', Validators.required],
      nom: ['', Validators.compose([Validators.required])], 
      prenom: ['', Validators.compose([Validators.required])],
      annee: ['', Validators.compose([Validators.required])], 
      details: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
    });
   }

  ngOnInit() {
    this.loadauteurs();

  }

    // method for loading all auteurs. It is using the crud service to getting data from the web API
    loadauteurs() {
      this.auteurservice.getAuteur()
      .subscribe(
         (auteurData: any) => {
        console.log(auteurData);
        this.auteurs = auteurData;
      });
    }
  // method for saving the art
  saveArt(values: { titre: string; nom: string; prenom: string; annee: string; details: string; }) {
    // we are using form data for preparing the form value. We avoid the JSON encoding and decoding method via HTTP requests.
    const artData = new FormData();
    artData.append('titre', values.titre);
    artData.append('nom', values.nom);
    artData.append('prenom', values.prenom);
    artData.append('annee', values.annee);
    artData.append('details', values.details);
    // accessing the create product service to save the product into the database
    this.artService.createArt(artData).subscribe(result => {
      // Once the product created successfully, we will redirect to the root page
      this.router.navigate(['']);
    });
  }

}
