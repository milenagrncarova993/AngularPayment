import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls:['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
   
  card: Card;
  CreditCardNumber:string;
  CardHolder:string;
  ExpirationDate: string;
  SecurityCode: string;
  Amount: string;

  result:string
  constructor(private http:HttpClient,private toastr:ToastrService) {}

  postData(){
    let url = "http://httpbin.org/post"
    this.http.post(url,{
      CreditCardNumber:this.CreditCardNumber
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.json.card.CreditCardName))
      this.result = JSON.stringify(data.json.card.CreditCardNumber)
    })
  }

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
