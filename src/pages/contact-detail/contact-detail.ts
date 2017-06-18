import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})

export class ContactDetail {

  public contact:any;

  constructor(private callNumber: CallNumber, public navParams: NavParams) {
    this.contact = this.navParams.get('contact');
  }

  async callMobile(mobile: any):Promise<any>{
    try{
      await this.callNumber.callNumber(mobile, true);
    }
    catch(e){
      console.log(e);
    }
  }


}
