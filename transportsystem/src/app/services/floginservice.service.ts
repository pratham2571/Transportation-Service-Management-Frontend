import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloginserviceService {

  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  createFLogin(flogin: Object): Observable<Object> {
    console.log(flogin);
    return this.http.post(`${this.baseUrl}/addflogin`, flogin); 
  }


 
}
