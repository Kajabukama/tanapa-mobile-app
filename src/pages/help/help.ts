import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ContactService } from "../../providers/contact.service";
import { ContactDetail } from "../contact-detail/contact-detail";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})

export class Help {

  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  contacts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contact:ContactService,
    public loadingCtrl: LoadingController
    )
  {
    this.contact.load();
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.filteredContacts();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.filteredContacts();
    });

  }

  onSearch() {
    this.searching = true;
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  filteredContacts() {
    this.contacts = this.contact.filterContacts(this.searchTerm);
  }

  viewDetail(contact){
    this.navCtrl.push(ContactDetail, {contact:contact});
  }

}
