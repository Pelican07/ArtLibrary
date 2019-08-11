import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-arts',
  templateUrl: './update-arts.component.html',
  styleUrls: ['./update-arts.component.css']
})
export class UpdateArtsComponent implements OnInit {
  artForm: FormGroup;
  artID: any;
  artData: any;

  constructor(
    private artService: ArtService,
    private router: Router,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
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
    this.artID = this.actRoute.snapshot.params.id;
    this.loadArtDetails(this.artID);
  }

  loadArtDetails(artID) {
    this.artService.getArtDetails(artID).subscribe(art => {
      this.artData = art;
      this.artForm.controls['titre'].setValue(this.artData['titre_oeuvre']);
      this.artForm.controls['nom'].setValue(this.artData['nom_artiste']);
      this.artForm.controls['prenom'].setValue(this.artData['prenom_artiste']);
      this.artForm.controls['annee'].setValue(this.artData['annee']);
      this.artForm.controls['details'].setValue(this.artData['details']);
    });
  }

  updateArtData(values) {
    const artData = new FormData();
    artData.append('id', this.artID);
    artData.append('titre', values.titre);
    artData.append('nom', values.nom);
    artData.append('prenom', values.prenom);
    artData.append('annee', values.annee);
    artData.append('details', values.details);
    this.artService.updateArt(artData).subscribe(result => {
      this.router.navigate(['']);
    });
  }

}
