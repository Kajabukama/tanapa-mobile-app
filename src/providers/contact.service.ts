import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  public contacts:any;
  public selected:any;

  constructor(public http: Http) {}

  load(){
    this.http.get('assets/data/contacts.data.json')
        .map((zone) => zone.json())
        .subscribe((data) => {
          this.contacts = data;
        });
  }

  loadById(id){
    this.http.get('assets/data/contacts.data.json')
    .map(res => {
        return res.json().filter((item) => {
            return item.id  ===  id;
        })
    })
    .subscribe(data => {
        this.selected = data;
        console.log(this.selected);
    });
  }

  filterContacts(searchTerm) {
    return this.contacts.filter((item) => {
      item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
