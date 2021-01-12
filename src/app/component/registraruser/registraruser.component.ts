import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-registraruser',
  templateUrl: './registraruser.component.html',
  styleUrls: ['./registraruser.component.css']
})
export class RegistraruserComponent implements OnInit {

  today: number = Date.now();

  contar: number = 0 ;
  loading = false;
  success = false;

  myForm: FormGroup; 
  sucessdata: any; 
  
 

  constructor(private router: Router, private fb:FormBuilder, private http: HttpClient) { 
    
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      //fecha: this.today,
     // hora: '',
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.minLength(5),
      ]] ,   //this.fb.array([])
      password: ['', [
        Validators.required,
        //Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(6),
      ]],
      telefon: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(10),
      ]]
      //contador: '',
      
    });

    //this.addCorreo();
  }




    
onGuardarUsuario(data)
{
  //console.log("sendtoguardarsu usuario");
  //console.log(data);
  //this.http.registraruser(data);  //go to http servies

                                            //was Reg/ pero trailing slash mandaba a get-index... en lav8
    return this.http.post(Constantes.capiURL + "Registro", data).subscribe(

        (res:Response) =>{

          this.sucessdata = res;
          if(this.sucessdata['status'] == "success"){

        window.alert("Usuario registrado con éxito")

                let token = res['data']['token'];  //res.data.acces.... not
                localStorage.setItem("token",'Bearer' +token);

                console.log("TOken = " + token);
              //this.htt.defaults.headers.common['Authorization'] = ' Bearer' +token;
              this.router.navigate(['/']);



          }else {
           
            console.log("Registro fallo!" + this.sucessdata)
            window.alert("Registro fallo! " + this.sucessdata['message'])}
        }


    );

}
}
