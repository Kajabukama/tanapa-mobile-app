import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Tabs } from '../../pages/tabs/tabs'
import { ParkDetail } from "../../pages/park-detail/park-detail";

import { ParksService } from "../../providers/parks.service";

@Component({
  selector: 'page-zone-detail',
  templateUrl: 'zone-detail.html',
})

export class ZoneDetail {

  public zone_id:number;
  public zone_name:string;

  constructor(public navCtrl: NavController,public navParams: NavParams,public _service:ParksService) {
      this.zone_id = this.navParams.get('id');
      this.zone_name = this.navParams.get('name');
      this._service.loadById(this.zone_id);
  }

  ionViewDidLoad() {


  }

  goHome(){
      this.navCtrl.push(Tabs);
  }

  parkDetail(id,name){
    this.navCtrl.push(ParkDetail,{id:id, name:name});
  }

}
