import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userID = this.router.params.pipe(
    tap(console.log),
    map( (params: { id: number}) => params.id),
  );


  constructor(
    readonly router: ActivatedRoute) { }

  ngOnInit() {
  }

}
