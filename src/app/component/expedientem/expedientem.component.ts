import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params,  Router } from '@angular/router';
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
querid: any;
queridempleado: any;
queridnombre:any;

@Input() inputs: any;

inputstr ="HELLO BIACH";


ngOnChanges() { //use SimpleChanges for multiple INPUTS

  //this.doSomething(this.myFirstInputParameter);
  console.log("onchangesng onchages");
}

  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router, private router2:ActivatedRoute) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id + "id of params...");       //ERROR PRONE? //nah its undefined....
      this.querid=params.idempleado;
      this.queridempleado= params.idempleado;
  });
    

    this.exform = this.fb.group({
      //fecha: this.today,
     // hora: '',
      nombre: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'), //TEMPORAL PARA PRUEBAS
        Validators.minLength(3),
        Validators.maxLength(8)
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
          //Validators.pattern('(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/)')
          //Validators.pattern('(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)')
            //Validators.pattern('/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/')
         // Validators.pattern('/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))/')
               ]],
    
      pac_estado: ['', [
        Validators.required,
             ]],
      lugarnac: ['', [
        //Validators.required,
             ]],
     domicilio: ['', [
        Validators.required,
           ]],  
      cp: ['', [
              Validators.required,
                   ]],
    telefon: ['', [
      Validators.required,
      Validators.pattern('^[0-9 ]*$'),
      Validators.minLength(10),
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


    if(this.querid != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
    {
     //cambiarbotonsave();
     //this.editar = true; //declara que el submit editara no creara nuevo registro
     this.getfromdata(this.querid);

    }
    /*else{                                        //else new examen con idempleado readonyl
     console.log(this.queridempleado);
    
     this.exform.controls['idempleado'].setValue(this.queridempleado);//.disable(); //disable mess with ability of formcontrol to give data
   
     //document.getElementById('idtemp').style.display = "none";
     //(<HTMLInputElement>document.getElementById('idemplea')).readOnly = true;//.value;
    
    }
    document.getElementById('idtemp').style.display = "none";
    //IF not query from 1... ?? then again solo debería haber uno...
      this.getfromdata(this.querid.id);*/


     // console.log("PREEEOnvalue chagnes iniited");
      this.onValueChanges();
    //  console.log("PODTOnvalue chagnes iniited");
  }//end of ONinit


  getcurry()
  {
    return JSON.stringify(this.fb); //exform.fb?

  }

  getfromdata(idemp)//id: int)
  {
    console.log("instant get expendiente");
    this.http.get(Constantes.capiURL+"Expediente/"+idemp).subscribe(data => {

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
        window.alert("Expediente no encontrado. " + this.sucessdata['mensaje']);// + '    No autorizado');
        //this.router.navigate(['/']);
  
      }
    });  
  
    
  }

   somchangesdeselect()
  {
    console.log("deselected input");    //if valid, check right now on database....
    if(this.exform.get('nombre').valid)
    this.checkvalidondatabase();
    else
    console.log("deselected NO valid dont httpreqeust"); 
  }
  
  checkvalidondatabase(){

    this.http.get(Constantes.capiURL+"Expediente").subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){
  
      //this.eqs = this.sucessdata['data'];
      window.alert(this.sucessdata['mensaje']);
      }else{
        window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
        //this.router.navigate(['/']);
  
      }
    });  
  
  }

onValueChanges(){
  /*
  console.log("Onvalue chagnes iniited");
    this.exform.get('nombre').valueChanges.subscribe(val=>{
      console.log(val);
    });*/
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




    this.exform.reset();

    this.router.navigate(['/pages/pacientes']);
    //this.webcamImage = null;
    //this.cancel();    

    }else{
      window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
      //this.router.navigate(['/']);

    }
  });  


 //console.log("post postsendtoguardarsu usuario");
}
    

}
