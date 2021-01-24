import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls:['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
   
  card: Card;
  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }
resetForm(form?:NgForm)
{
  if (form != null)
form.reset();
this.card= {
  CreditCardNumber:'',
  CardHolder:'',
  ExpirationDate:'',
  SecurityCode:'',
  Amount:''
}
}
}
