import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { TestItem } from './models/test-item';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  

  getTestresult():Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8081/last`);
  }
}
