import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { delay, concatMap, tap, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @Input() userID: number;

  form: FormGroup;

  savedChanges$ = new Observable<User>();

  constructor(
    readonly fb: FormBuilder,
    readonly userService: UserService,
    ) {
    this.form = this.fb.group(
      {
        id: [''],
        name: [''],
        age: [],
        sex: [''],
        location: [''],
        generalInfo: [''],
      }
    );
  }

  ngOnInit() {
    this.savedChanges$ = this.form.valueChanges.pipe(
      debounceTime(500),
      concatMap( (changes) => this.userService.saveUser({ ...changes}) ),
      tap(() => console.log('saving'))
    );

    this.savedChanges$.subscribe( user => this.patchFormValue(user));

  }

  ngOnChanges() {
    this.userService.returnUser(this.userID)
    .subscribe(user => {
      this.patchFormValue(user);
    });
  }

  patchFormValue(user: User) {
    this.form.patchValue(user, { emitEvent: false})
  }


}
