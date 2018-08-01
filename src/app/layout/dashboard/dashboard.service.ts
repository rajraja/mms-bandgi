import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public apiUrl = 'https://test.bandgi.com/cnirestapi'
  token: String;
  customerid: String;
  tokenResponse = JSON.parse(localStorage.getItem("tokenResponse"));
  
  constructor(public http: HttpClient) { 
   
  }
  loadDevices(customerid) {
    const headers = new HttpHeaders({
      token: this.tokenResponse.token,
    });
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl +'/customers/' + customerid + '/installeddevices', {headers}).subscribe(data => {
            resolve(data);
            }, err => {
                reject(err);
        });
    });
  };
  loadAlarms(customerid) {
    const headers = new HttpHeaders({
      token: this.tokenResponse.token,
    });
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl +'/customers/' + customerid + '/alarms', {headers}).subscribe(data => {
            resolve(data);
            }, err => {
                reject(err);
        });
    });
  };
  loadGridData(customerid) {
    const headers = new HttpHeaders({
      token: this.tokenResponse.token,
    });
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl +'/customers/' + customerid + '/installeddevicescountbyarea', {headers}).subscribe(data => {
            resolve(data);
            }, err => {
                reject(err);
        });
    });
  };
}
