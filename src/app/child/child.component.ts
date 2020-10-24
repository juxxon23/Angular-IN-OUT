import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data1: any;
  @Input() data2: any;
  
  @Output() message = new EventEmitter<string>();
  
  stateMsg: string = "complete";

  state() {
	this.message.emit(this.stateMsg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
