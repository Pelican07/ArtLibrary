import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-arts',
  templateUrl: './read-arts.component.html',
  styleUrls: ['./read-arts.component.css']
})
export class ReadArtsComponent implements OnInit {
  artID: any; // Getting Art id from URL
  artData: any; // Getting Art details

  constructor(
    private artService: ArtService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // to get the art id from URL, use ActivatedRoute fonctionnality
    this.artID = this.actRoute.snapshot.params.id;
    this.loadArtDetails(this.artID);
  }

  loadArtDetails(artID: number) {
    this.artService.getArtDetails(artID)
    // access to the CRUD service and got detail
    .subscribe(art => {
      console.log('artid:', artID);
      this.artData = art;
      console.log(this.artData);
    // art details saved into artData property
    });
  }

  navigation(link: any) {
    this.router.navigate([link]);
  }
}
