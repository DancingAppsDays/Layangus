import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public ff: FormGroup;
  public loginsubmitted: Boolean = false;
  public successdata: any;

  constructor(private fb: FormBuilder, private router: Router, private htt:HttpClient) { }

  ngOnInit(): void {

    this.ff = this.fb.group({
      email: ['', Validators.required],  //was username....
      password: ['', Validators.required],
    })
  }


  onLogoutSubmit(){

    return this.htt.post(Constantes.capiURL+"Logout",this.loginsubmitted/*,{ headers: { Authorization:localStorage.getItem('token') } }*/).subscribe((res: Response) => {
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






  onLoginSubmit(logindata) { 
   

    return this.htt.post(Constantes.capiURL+"Login", logindata).subscribe((res: Response) => {
        this.successdata = res;
        
        if(this.successdata['status'] == "success")
        {
            window.alert(this.successdata['data']['name']+" has been Login successfully");
            
            let token = res['data']['token'];  //res.data.acces.... not
            localStorage.setItem("token",'Bearer' +token);

            sessionStorage.setItem("name",this.successdata['data']['name']);
            sessionStorage.setItem("session","true");                       //experimental sess

            
            this.router.navigate(['/']);
            

          
        }else if(this.successdata['status'] == "error")
        {
          window.alert(this.successdata['error']);//"Datos de login incorrectos");
         /* Swal.fire({
          title: 'OPPS!!',
          text:   "Login details are not coreect.",
          icon: 'error'
        });*/
        }else {
          window.alert("unknown BUG");
        }

        //
      
        
    },  
    error =>{ window.alert("Error de conexión");   //error.message);
        console.log(error.message);}
    
    );
  }

}





