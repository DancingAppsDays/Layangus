import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Constantes } from './constantes';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'layangus';
sesion:string; //wanted to be boolean, no wonder ngif == true didnt check----
 successdata: any;

 public loginsubmitted: Boolean = false; //no idea

 constructor( private htt:HttpClient) { }


 
  ngOnInit(): void {

  // console.log("guardasesion");
    //this.sesion = sessionStorage.getItem('session');
    //console.log(this.sesion);
  }

  ngDoCheck() {    //was ngdocheck, cada typeo ! ! !
    this.sesion = sessionStorage.getItem('session');    //how bad is performance??

    //console.log(this.sesion);
   // console.log("dochecked");
  }

  onLogoutSubmit(){

    console.log("LOGOUT butt");

    return this.htt.post(Constantes.capiURL+"Logout",this.loginsubmitted).subscribe((res: Response) => {
      this.successdata = res;
      
      if(this.successdata['status'] == "success")
      {      window.alert("Usuario " + sessionStorage.name + " cerró sesion");
          localStorage.clear();
          sessionStorage.clear();
         //this.successdata['data']['name']+" has been Login successfully");
      }
      else  {
      console.log(res);
      sessionStorage.clear();   //regardless?? ? //Frontend validation primero, no importa que siga validado en server
      }

      //window.alert("unknown erorr at lougout");

  });}
}
  