import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';

import { ParksService } from "../../providers/parks.service";
import { ParkExtra } from "../park-extra/park-extra";
import { Popover } from "../popover/popover";

@Component({
  selector: 'page-park-detail',
  templateUrl: 'park-detail.html',
})

export class ParkDetail {

  public park_id:number;
  public zone_id:number;
  public park_name:string;

  constructor(public navCtrl: NavController,public navParams: NavParams,private service:ParksService,private modalCtrl:ModalController, private popoverCtrl:PopoverController) {

    // reading params
    this.park_id = this.navParams.get('id');
    this.park_name = this.navParams.get('name');

    this.service.loadParkById(this.park_id);
  }



  openTodo(id){
    this.modalTodo(id);
  }

  modalTodo(id:number) {
    let modal = this.modalCtrl.create(ParkExtra,{id:id});
    modal.present();
  }

  presentPopover(myEvent){
    let popover = this.popoverCtrl.create(Popover,{showBackdrop:true});
    popover.present({
      ev: myEvent
    });
  }

  openVisit(){

  }
  openAccommodation(){

  }

}
