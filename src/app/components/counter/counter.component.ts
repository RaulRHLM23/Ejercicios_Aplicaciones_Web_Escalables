import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 100;
  constructor(){
    
    console.log("Construyendo el componente");
    this.incrementBy(1);
    this.incrementBy(2);
    this.incrementBy(3);
    
  }
  incrementBy(value : number) : void {
    this.counter+=value;
  }
}
