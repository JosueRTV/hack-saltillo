import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getBase(){
    /* Una petición get a api en db tecnologias (todas las tecnologias) */
    return this.http.get('http://localhost:5000', {})
  }

  postBase(): Observable<any> {
  // Ejemplo de petición post:
    return this.http.post('http://localhost:5000', {
      id: 10,
      userId: 3,
      name: "Josue",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, error?",
    }, {} )
  }
}
