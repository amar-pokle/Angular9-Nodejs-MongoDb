import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(client_name, father_name, address, email, mobile_no) {
    const obj = {
      client_name: client_name,
      father_name: father_name,
      address: address,
      email: email,
      mobile_no: mobile_no
    };
   
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(client_name, father_name, address, email, mobile_no, id) {

    const obj = {
        client_name: client_name,
        father_name: father_name,
        address: address,
        email: email,
        mobile_no: mobile_no

      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  

    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}