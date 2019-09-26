import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-arts',
  templateUrl: './page-arts.component.html',
  styleUrls: ['./page-arts.component.css']
})
export class PageArtsComponent implements OnInit {

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit() {
  }

  // method for processing navigation. It has two input parameters. One is a path, and another one is Art id.
  getNavigation(link: string, id: string) {
    if (id === '') {
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }
}
