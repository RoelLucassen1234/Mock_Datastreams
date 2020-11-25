import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpBackend, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  private httpClient: HttpClient;

  getTestresult(data):Observable<any>{
    return this.httpClient.post(`urltje`, data);
  }
}
