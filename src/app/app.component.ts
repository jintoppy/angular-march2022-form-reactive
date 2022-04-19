import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { isCharacterLengthGreaterThan3, mapInputPrefix } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCtrl = new FormControl('', [Validators.required, Validators.minLength(2)]);


  myForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: [],
    profile: this.fb.group({
      email: ['', [Validators.email]],
      address: ['']
    })
  });

  constructor(private fb: FormBuilder){
    this.myForm.patchValue({
      username: 'hi',
      password: 'sadf'
    });
  }

  onSubmit(){
    console.log(this.myForm.value);
  }


  ngOnInit(){

    this.myCtrl.valueChanges
    .pipe(
      filter(isCharacterLengthGreaterThan3),
      map(mapInputPrefix)
    )
    .subscribe((val:string) => {
      console.log(val);
    });
  }

  onClick(){
    console.log(this.myCtrl.value);
  }
}
