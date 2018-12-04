import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from "../playground.service";

import { forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  constructor(
    private service: PlaygroundService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    const postOne$ = this.service.getPost(1);
    const postTwo$ = this.service.getError();
    const postThree$ = this.service.getPost(3);

    const posts$ = forkJoin(postOne$, postTwo$, postThree$);

    posts$.subscribe(
      data => {
        console.log('data', data);

        let postOne = data[0];
        let postTwo = data[1];
        let postThree = data[2];

        console.log('postOne', postOne);
        console.log('postTwo', postTwo);
        console.log('postThree', postThree);

      },
      error => {
        console.log('error', error);
      },
      () => {}
    );
  }

}
