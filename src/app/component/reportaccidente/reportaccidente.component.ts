import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Constantes } from 'src/app/constantes';

//import { DatePipe } from '@angular/common'

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

  querid:any;
  queridempleado: any;
  queridnombre:any;
  editar: boolean;



  constructor(private fb:FormBuilder, private http:HttpClient, private router2:ActivatedRoute) { }

  ngOnInit(): void {


    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id + "id of params...");       //ERROR PRONE? //nah its undefined....
      this.querid=params.id;
      this.queridempleado= params.idempleado;
      this.queridnombre=params.nombre;
  });


    this.myForm = this.fb.group({
     
     idempleado: ['', [
        Validators.required       
      ]],
      nombre: ['', [
        Validators.required//,
        //Validators.pattern('^[a-zA-Z ]*$')
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
      tipoacci: ['', [
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
    if(this.querid != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
    {
     //cambiarbotonsave();
     this.editar = true; //declara que el submit editara no creara nuevo registro
     this.getfromdata(this.querid);


      console.log("editar, no nuevo  " + this.querid)

    }else{                                        //else new examen con idempleado readonyl
     console.log(this.queridempleado);
    
     this.myForm.controls['idempleado'].setValue(this.queridempleado);//.disable(); //disable mess with ability of formcontrol to give data
     (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;
     this.myForm.get('nombre').setValue(this.queridnombre);
     
      
     //document.getElementById('idtemp').style.display = "none";
     //(<HTMLInputElement>document.getElementById('idemplea')).readOnly = true;//.value;
    
    }
    document.getElementById('idtemp').style.display = "none";



     // this.getfromdata();

  }//end of ONinit


  getcurry()
  {
    return JSON.stringify(this.fb); //exform.fb?

  }

  getfromdata(id)                             //EXAMPLEE:.. FIX WITH(INT i)
  {
    this.http.get(Constantes.capiURL+"Accidente/"+id).subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){
        this.exs = this.sucessdata['data'];
        console.log(this.exs);
      window.alert(this.sucessdata['mensaje']);


      var datess = this.exs.fechacci;//'2018/08/09 20:54';
     //datess = new Date();
    // console.log(datess);
    // datess = datess.replace(' ', 'T');
     //console.log(datess);
    // let newdate = new Date(Date.parse(datess));

     //console.log(newdate);
     var datess2 = this.exs.fechaservi;

     datess = datess.substring(22,0);
     datess = datess.replace(' ', 'T');
     datess = datess+".00";


     datess2 = datess2.substring(22,0);
     datess2 = datess2.replace(' ', 'T');
     datess2 = datess2+".00";
    // let newdate2 = new Date(Date.parse(datess));
     //Date.parse(datess)
    //let ass =this.datpipe.transform(datess,'yyyy-MM-dd');     
    
    //console.log(ass);
    // console.log(datess.toISOString());
    // datess = date("Y-m-d\TH:i:s", strtotime($yourdate))

    //datess = new Date(datess.value).toISOString();//failed to

    //let dateTimeParts= datess.split(/[- :]/); // regular expression split that creates array with: year, month, day, hour, minutes, seconds values
    //dateTimeParts[1]--; // monthIndex begins with 0 for January and ends with 11 for December so we need to decrement by one
    
    //const dateObject = new Date(dateTimeParts);

    //console.log(dateObject);
    //datess = strtotime(datess))
/*
      console.log(datess);// + "fecha adquiridaaa");
      //var todayString  = datess.toDateString(); 
      //var datt = new Date();
      datess = datess.replace(' ', 'T');
      console.log(datess);

      //datess = datess.substring(0,datess.Length-3)  //or remove without the 0 index
      datess = datess.substring(16,datess.Length-3);
      console.log(datess);
        */
     //  datess: {{'1990-11-25T14:35:00Z' | date:"dd/MM/yyyy HH:mm"}}

      //Date: {{datess | datess:"dd/MM/yyyy HH:mm"}}
     // datess = datess.toISOString().slice(0, 16);


        this.myForm.patchValue({
          nombre: this.exs.nombre,
          depa: this.exs. depa,
          fechacci: datess2,///'1990-11-25T14:30:00Z',//newdate,// this.exs.fechaacci,
          fechaservi: datess2,//'1990-11-25T14:35:00Z',//this.exs.fechaservi,
          partec: this.exs.partec,
          diagnos: this.exs.diagnos,
          tratat: this.exs.tratat,
          mecan: this.exs.mecan,
          tipoacci: this.exs.tipoacci,
          dispo: this.exs.dispo,
          grave: this.exs.grave,
          pronos: this.exs.pronos,
          observa: this.exs.observa,
          nombredoc: this.exs.nombredoc
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
  //console.log("sendtoguardarsu usuario");
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
