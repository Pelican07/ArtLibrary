import { Component, OnInit } from '@angular/core';
import { AuteurService } from 'src/app/services/auteur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-auteurs',
  templateUrl: './read-auteurs.component.html',
  styleUrls: ['./read-auteurs.component.css']
})
export class ReadAuteursComponent implements OnInit {
  auteurID: any; // Getting auteur id from URL
  auteurData: any; // Getting auteur details

  constructor(
    private AuteurService: AuteurService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // to get the auteur id from URL, use ActivatedRoute fonctionnality
    this.auteurID = this.actRoute.snapshot.params.id;
    this.loadauteurDetails(this.auteurID);
  }

  loadauteurDetails(auteurID: number) {
    this.AuteurService.getAuteurDetails(auteurID)
    // access to the CRUD service and got detail
    .subscribe(auteur => {
      console.log('auteurid:', auteurID);
      this.auteurData = auteur;
      console.log(this.auteurData);
    // auteur details saved into auteurData property
    });
  }

  navigation(link: any) {
    this.router.navigate([link]);
  }
}
