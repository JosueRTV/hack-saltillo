import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService,

  ) { }

  ngOnInit() {
  }

  sendRequest(){
    this.service.getBase()
    .subscribe(data=>{
      console.log(data)
    })
  }

}
