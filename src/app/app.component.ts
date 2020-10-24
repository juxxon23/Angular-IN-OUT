import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacion';

  user = this.fb.group({
  	  fname: [''],
  	  uname: [''],
  });

  fname: string;
  uname: string;
  myState: string = "incomplete";
  controlShow: boolean = false;

  save() {
  	this.fname = this.user.get('fname').value;
  	this.uname = this.user.get('uname').value;
  	this.controlShow = true;
  }

  changeState(changes: string) {
	this.myState = changes;
  }

  constructor(
  	  private fb: FormBuilder
  ) {}
}
