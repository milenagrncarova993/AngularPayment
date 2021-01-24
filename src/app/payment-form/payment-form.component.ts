import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls:['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
   
  card: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
