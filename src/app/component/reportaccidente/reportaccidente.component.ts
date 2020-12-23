import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-reportaccidente',
  templateUrl: './reportaccidente.component.html',
  styleUrls: ['./reportaccidente.component.css']
})
export class ReportaccidenteComponent implements OnInit {

  loading = false;
  success = false;
  today = Date.now();
  myForm: FormGroup; 
  sucessdata:any;
  exs : any;



  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
     
      nombrel: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      depa: ['', [
        Validators.required,
             ]],
      fechacci: ['', [
        Validators.required,
             ]],
       fechaservi: ['', [
        Validators.required,
             ]],
      partec: ['', [
        Validators.required,
             ]],
      diagnos: ['', [
        Validators.required,
             ]],
      tratat: ['', [
        Validators.required,
             ]],
      mecan: ['', [
        Validators.required,
             ]],
      tipoacc: ['', [
        Validators.required,
             ]],
      dispo: ['', [
        Validators.required,
             ]],
      grave: ['', [
        Validators.required,
             ]],
      pronos: ['', [
        Validators.required,
             ]],
      observa: ['', [
        Validators.required,
             ]],
             nombredoc: ['', [
              Validators.required,
                   ]],









    });


     // this.getfromdata();

  }//end of ONinit


  getcurry()
  {
    return JSON.stringify(this.fb); //exform.fb?

  }

  getfromdata()                             //EXAMPLEE:.. FIX WITH(INT i)
  {
    this.http.get(Constantes.capiURL+"Accidente/1").subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){
        this.exs = this.sucessdata['data'];
        console.log(this.exs);
      window.alert(this.sucessdata['mensaje']);

        this.myForm.patchValue({
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
  this.http.post(Constantes.capiURL+"Accidente",data).subscribe(data => {

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
