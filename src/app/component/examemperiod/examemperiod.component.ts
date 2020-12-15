import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/app/constantes';


@Component({
  selector: 'app-examemperiod',
  templateUrl: './examemperiod.component.html',
  styleUrls: ['./examemperiod.component.css']
})
export class ExamemperiodComponent implements OnInit {

  loading = false;
  success = false;
  today = Date.now();
  exform: FormGroup; 

  


  constructor(private fb:FormBuilder, private http:HttpClient) { }

  

  ngOnInit(): void {

     

    this.exform = this.fb.group({
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

      fechaingreso: ['', [
                Validators.required,
                     ]],
      area: ['', [
                Validators.required,
                     ]],
      cc: ['', [
                Validators.required,
                     ]],                                        
      numnomina: ['', [
        Validators.required,
             ]],
      puestoac: ['', [
              Validators.required,
                   ]],
      tiempopues: ['', [
          Validators.required,
               ]],
      puestoacdesc: ['', [
                Validators.required,
                     ]],  
      ruidobox: [false, [
              Validators.required,
                   ]],
      vibracionbox: [false, [
        Validators.required,
             ]],
      temperaturabox: [false, [
              Validators.required,
                   ]],
      polvobox: [false, [
          Validators.required,

               ]],
      humobox: [false, [
                Validators.required,
                     ]],  
      vaporbox: [false, [
              Validators.required,
                   ]],
      polvod: ['', [
          //Validators.required,
               ]],
      humod: ['', [
               // Validators.required,
                     ]],  
      vapord: ['', [
              //Validators.required,
                   ]],
     quimbox: ['', [
               // Validators.required,
                     ]],  
      biobox: ['', [
              //Validators.required,
                   ]],
      
    });
 
   
  }
  onGuardarexpediente(data)
{ 
  console.log("sendtoguardarsu examenmem");
  console.log(data);   
  //this.http.post(Constantes.capiURL+"expediente",data);  //go to http servies
}
     
 
}
