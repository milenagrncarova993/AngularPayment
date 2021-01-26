import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardService } from '../shared/card.service'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls:['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
   
  card: Card;

  constructor(private CardService:CardService ,private toastr:ToastrService) {}

 

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

onSubmit(form:ngFrom)
this.CardService.paymentCard(form.value)
.subscribe((data:any)=>{
  if(data.Succeeded == true)
  {
    this.resetForm(form);
    this.toastr.success('User Payment Successful');
  }
  else
  {
    this.toastr.error(data.Errors[0]);
  }
})

