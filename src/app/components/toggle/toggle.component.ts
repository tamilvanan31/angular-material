import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

@Input() value = false;
@Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  toggle(event: any) {
    console.log(event)
    this.toggleChange.emit(event.checked)
    }
}
