import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from '../constantes';

@Injectable()// ({  providedIn: 'root'})//might... fuck up everyythingggg// it does... but whitouththis... null injector.
export class HttpserviceService {

  backen : string = Constantes.capiURL;


   // apiurl: string = "https://novatechdpw2.000webhostapp.com/api/";
  url2: string =  this.backen + "Empleado/";
  url3: string =  this.backen + "Maquina/";

basePath: string  = this.backen + "authenticate/"


private localStorageService;
//private currentSession : Session = null;


sucessdata: any;    //for auth registro
submitted = false;


  constructor(private http: HttpClient, private router: Router) {

    if(localStorage.getItem('token') === null){
      localStorage.setItem("token","_");     //    proper place for init empty token?
    }

   }

  method1()
  {
      return console.log('method1formservice');
  }

  getempleados()
  {
   //return this.http.get('https://api.openbrewerydb.org/breweries');
    //return this.http.get('localhost:8000/api/Empleado');
    //return this.http.get('127.0.0.1:8000/api/Maquina');
    return this.http.get(this.url2);//,  //{ headers: { Authorization:localStorage.getItem('token'), 'Accept': 'application/json',    'Content-Type': 'application/json', } });
    // +"Empleado/");//this.url2);

    //headers: {
      //'Accept': 'application/json',
     // 'Content-Type': 'application/json',
    //},

  }
  getequips()
  {                                             //data, {header}                                  //jwtTolen
    return this.http.get(this.url3,{ headers: { Authorization:localStorage.getItem('token') } })


  }

  
  registraruser(data)
  {                                           //was Reg/ pero trailing slash mandaba a get-index... en lav8
    return this.http.post(this.backen + "Registro", data).subscribe(

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
