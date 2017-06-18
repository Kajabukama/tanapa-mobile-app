import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';


@Component({
  template: `
    <ion-list no-lines>
        <button ion-item (click)="openVisit()">
            <ion-icon name="time" item-left></ion-icon>
            <h2>Best time to visit</h2>
        </button>
        <button ion-item (click)="openAccommodation()">
            <ion-icon name="restaurant" item-left></ion-icon>
            <h2>Accommodation</h2>
        </button>

        <button ion-item (click)="openTodo(this.service.park.id)">
            <ion-icon name="eye" item-left></ion-icon>
            <h2>What you can do</h2>
        </button>
    </ion-list>
  `
})
export class Popover {

  constructor(public viewCtrl:ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
