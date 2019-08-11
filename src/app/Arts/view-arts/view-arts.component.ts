import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-arts',
  templateUrl: './view-arts.component.html',
  styleUrls: ['./view-arts.component.css']
})
export class ViewArtsComponent implements OnInit {
  public arts: any = [];

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit() {
    // to load arts during application initialisation
    this.loadArts();
  }

  // method for loading all arts. It is using the crud service to getting data from the web API
  loadArts() {
    this.artService.getArts()
    .subscribe(
       (artData: any) => {
      console.log(artData);
      this.arts = artData;
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
  deleteArt(ID) {
    this.artService.deleteArt(ID).subscribe(data => {
      this.loadArts();
    });
  }
}
