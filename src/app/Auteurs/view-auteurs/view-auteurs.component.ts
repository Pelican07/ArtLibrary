import { Component, OnInit } from '@angular/core';
import { AuteurService } from 'src/app/services/auteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-auteurs',
  templateUrl: './view-auteurs.component.html',
  styleUrls: ['./view-auteurs.component.css']
})
export class ViewAuteursComponent implements OnInit {
  public auteurs: any = [];

  constructor(private auteurservice: AuteurService, private router: Router) { }

  ngOnInit() {
    // to load auteurs during application initialisation
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

  // method for processing navigation. It has two input parameters. One is a path, and another one is product id.
  getNavigation(link: string, id: string){
    if (id === '') {
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }

  // method to delete a book
  deleteAuteur(ID) {
    this.auteurservice.deleteAuteur(ID).subscribe(data => {
      this.loadauteurs();
    });
  }
}
