import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-expedientem',
  templateUrl: './expedientem.component.html',
  styleUrls: ['./expedientem.component.css']
})
export class ExpedientemComponent implements OnInit {

  loading = false;
  success = false;
  today = Date.now();
  exform: FormGroup; 
  sucessdata:any;
  exs : any;



  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.exform = this.fb.group({
      //fecha: this.today,
     // hora: '',
      nombre: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      idempleado: ['', [
        Validators.required,
             ]],
      imss: ['', [
        //Validators.required,
             ]],
     sangre: ['', [
        //Validators.required,
             ]],
      edad: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$')
      ]],
      estadocivil: ['', [
        Validators.required,
             ]],
      sexo: ['', [
              Validators.required,
                   ]],
      fechan: ['', [
          Validators.required,
               ]],
      domicilio: ['', [
                Validators.required,
                     ]],
      telefon: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(10),
      ]],
      pac_estado: ['', [
        Validators.required,
             ]],
      lugarnac: ['', [
        Validators.required,
             ]],
      cp: ['', [
              Validators.required,
                   ]],
      celfon: ['', [
          Validators.required,
               ]],
      escolaridad: ['', [
                Validators.required,
                     ]],  
      contactoeme: ['', [
              Validators.required,
                   ]],
      domicilioeme: ['', [
          Validators.required,
               ]],
     telefoneme: ['', [
                Validators.required,
                     ]],  
      tratamientos1: ['', [
              //Validators.required,
                   ]],
      tratamientos2: ['', [
          //Validators.required,
               ]],
      padecimientos1: ['', [
                //Validators.required,
                     ]],  
       padecimientos2: ['', [
              //Validators.required,
                   ]],
      medem: ['', [
         // Validators.required,
               ]],
    medimss: ['', [
                //Validators.required,
                     ]], 
     acci1: ['', [
             // Validators.required,
                   ]],
      acci2: ['', [
          //Validators.required,
               ]],
      acci3: ['', [
                //Validators.required,
                     ]],  
       accidescrip: ['', [
              //Validators.required,
                   ]],     
    });


      this.getfromdata();

  }//end of ONinit


  getcurry()
  {
    return JSON.stringify(this.fb); //exform.fb?

  }

  getfromdata()//id: int)
  {
    this.http.get(Constantes.capiURL+"Expediente/1").subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){
        this.exs = this.sucessdata['data'];
        console.log(this.exs);
      window.alert(this.sucessdata['mensaje']);

                                            //nice try but needs model also
      //this.exform.get('nombre').setValue("exs.nombre");   //formgroup solution instead of ngmodel

        //Alex alvear solution
        this.exform.patchValue({
          nombre: this.exs.nombre,
          imss: this.exs.imss,
          sangre: this.exs.sangre,
          edad: this.exs.edad,
          estadocivil: this.exs.estadocivil,
          sexo: this.exs.sexo,
          fechan: this.exs.fechan,
          domicilio: this.exs.domicilio,
          telefon: this.exs.telefon,
          celfon: this.exs.celfon,
          escolaridad: this.exs.escolaridad,
          contactoeme: this.exs.contactoeme,
          domiclioeme: this.exs.domicilioeme,
          telefoneme: this.exs.telefoneme,
          tratamientos1: this.exs.tratamientos1,
          tratamientos2: this.exs.tratamientos2,
          padecimientos1: this.exs.padecimientos1,
          padecimientos2: this.exs.padecimientos2,
          medem: this.exs.medem,
          medimss: this.exs.medimss,
          acci1: this.exs.acci1,
          acci2: this.exs.acci2,
          acci3: this.exs.acci3,
          accidescrip: this.exs.accidescrip
        }
        );

      }else{
        window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
        //this.router.navigate(['/']);
  
      }
    });  
  


  }

  onGuardarexpediente(data)
{
  console.log("sendtoguardarsu usuario");
  //console.log(data);
  this.http.post(Constantes.capiURL+"Expediente",data).subscribe(data => {

    this.sucessdata = data;
    if(this.sucessdata['status'] == "success"){

    //this.eqs = this.sucessdata['data'];
    window.alert(this.sucessdata['mensaje']);
    }else{
      window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
      //this.router.navigate(['/']);

    }
  });  


 //console.log("post postsendtoguardarsu usuario");
}
    

}
