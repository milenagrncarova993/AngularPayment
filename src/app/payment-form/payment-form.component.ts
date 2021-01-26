import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls:['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
   
  card: Card;
  CreditCardnNumber:string;
  result:string;

  constructor(private http:HttpClient) {}

  postData(){
    let url = "http://httpbin.org/post"
    this.http.post (url,{
      CreditCardnNumber:this.CreditCardnNumber
    }).toPromise().then((data:any) =>{
      console.log(data)
      console.log(JSON.stringify(data.json.CreditCardnNumber))
      this.result = JSON.stringify(data.json.CreditCardnNumber)
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

