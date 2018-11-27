import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from '../playground.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private service: PlaygroundService
  ) { }

  ngOnInit() {
    console.log('calling getAllPosts');
    this.getAllPosts();
    this.getError();
  }

  getAllPosts() {
    this.service.getAllPosts().subscribe(
      data => {
        console.log(data);
      },
      error => {},
      () => {},
    );
  }

  getError() {
    this.service.getError().subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('you have an error');
        console.log(error);
      }
    );
  }

}
