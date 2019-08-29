import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  form: FormGroup;

  user: User;

  constructor(
    readonly fb: FormBuilder,
    readonly userService: UserService,
    readonly router: ActivatedRoute,
    ) {
    this.form = this.fb.group(
      {
        name: [''],
        age: [],
        sex: [''],
        location: [''],
        generalInfo: [''],
      }
    );
  }

  ngOnInit() {
    this.userService.returnUser(this.router.snapshot.params.id).subscribe(user => {
      this.form.patchValue(user);
    });
  }

}
