import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { ParksService } from "../../providers/parks.service";

@Component({
  selector: 'page-visit',
  templateUrl: 'park-extra.html',
})

export class ParkExtra {


  public id:number;
  public details:any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public viewCtrl:ViewController,public service:ParksService){

    this.id = this.navParams.get('id');
    this.service.loadParkById(this.id);

  }

  ionViewDidLoad() {
    this.loadTodo();
  }


   dismiss() {
    this.viewCtrl.dismiss();
  }

  loadTodo(){
      this.details = this.service.park.activities;
  }


}
