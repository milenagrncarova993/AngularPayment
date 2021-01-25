import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly rootUrl = 'http://localhost:6005/';
  constructor(private http: HttpClient) { }

  paymentCard(card : Card){
    const body : Card = {
      CreditCardNumber: card.CreditCardNumber,
      CardHolder: card.CardHolder,
      ExpirationDate: card.ExpirationDate,
      SecurityCode: card.SecurityCode,
      Amount: card.Amount
    }
    return this.http.post(this.rootUrl + 'api/User/Payment',body)
  }
}
