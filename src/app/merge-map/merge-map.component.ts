import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { PlaygroundService } from '../playground.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  constructor(private service: PlaygroundService) {}

  ngOnInit() {
    console.log('calling getAllPosts');
    this.loadData();
  }

  private loadData() {
    const post$ = this.service.getPost(1);

    const relatedPosts$ = post$.pipe(
      mergeMap(post => {
        const authorId = post.userId;
        console.log('authorId', authorId);

        return this.service.getError(500);
      })
    );

    relatedPosts$.subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      },
      () => {}
    );
  }

}
