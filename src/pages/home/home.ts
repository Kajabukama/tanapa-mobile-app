import { Component } from '@angular/core';
import { ActionSheetController, Platform } from 'ionic-angular';

import { ActivityService } from '../../providers/activities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public activityService: ActivityService,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform) {}

  ionViewDidLoad() {
    this.activityService.loadActivities();
  }

  presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Information',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'UtaliiWetu',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'help-circle' : null,
          handler: () => {
            console.log('about utalii app');
          }
        },
        {
          text: 'Developer',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('about author');
          }
        },
		  {
          text: 'Notifications',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'notifications' : null,
          handler: () => {
            console.log('notifications');
          }
        },
		  {
          text: 'Settings',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'settings' : null,
          handler: () => {
            console.log('settings');
          }
        }
      ]
    })

    actionSheet.present();
  }

}
