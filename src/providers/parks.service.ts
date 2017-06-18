import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()

export class ParksService {

  public all_zones: any;
  public selected: any;
  public park:any;

  constructor(public http: Http) {}

  load(){
    this.http.get('assets/data/parks.data.json')
        .map((zone) => zone.json())
        .subscribe((data) => {
          this.all_zones = data;
        });
  }

  loadById(id){
    this.http.get('assets/data/parks.data.json')
    .map(res => {
        return res.json().filter((item) => {
            return item.id  ===  id;
        })
    })
    .subscribe(data => {
        this.selected = data;
    });
  }

  loadParkById(id){

    this.selected.forEach((item) => {
      item.parks.forEach((element) => {
        if(element.id === id){
          this.park = element;
        }
      })
    });
  }

}
