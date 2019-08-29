import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  form: FormGroup;

  constructor(readonly fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: ['default name'],
        age: [22],
        sex: ['male'],
        location: [''],
        generalInfo: [''],
      }
    );
  }

  ngOnInit() {
  }

}
