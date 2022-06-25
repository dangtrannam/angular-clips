import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
