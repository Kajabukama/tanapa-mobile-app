import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ActivityService {

  activities: any;

  constructor(public http: Http) {}

  loadActivities(){
      this.http.get('assets/data/activity.data.json')
      .map(res => res.json())
      .subscribe(data => {
          this.activities = data;
      })
  }

}
