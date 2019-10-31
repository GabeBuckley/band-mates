import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  signupTypes = [
    {
      value: 'muso',
      label: 'Musician',
      desc: 'I play music for people, sometimes I even get paid'
    },
    {
      value: 'fan',
      label: 'Music fan',
      desc: 'I love to rock out to my favourite bands'
    },
    {
      value: 'sp',
      label: 'Service providor',
      desc: 'I run a venue, do sound or lighting etc'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({

    });
    this.secondFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      postCodeCtrl: ['', Validators.required]
    });
  }

}
