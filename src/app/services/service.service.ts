import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getBase(){
    /* Una petición get a api en db tecnologias (todas las tecnologias) */
    return this.http.get('http://localhost:3000/api/technologies', {})
  }

/*
  token(): Observable<any> {
  // Ejemplo de petición post:
    return this.http.post('http://localhost:51279/api/values', {
      Email: "testing@arkusnexus.com",
	    Password: "123123123"
    }, { headers: this.HEADERS} )
  }
*/
}
