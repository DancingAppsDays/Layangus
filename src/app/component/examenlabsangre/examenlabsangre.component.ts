import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-examenlabsangre',
  templateUrl: './examenlabsangre.component.html',
  styleUrls: ['./examenlabsangre.component.css']
})
export class ExamenlabsangreComponent implements OnInit {

  exForm: FormGroup;
  art:any;
  today = new Date;//Date.now();
  todaystring:any;
  exs:any;
//tooday = this.today.format('MM/DD/YYYY hh:mm A');
audiofileString:string;
//audiofileString
success:any;  //used really?

  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.exForm = this.formBuilder.group({
     id: '',
     idempleado:['',[Validators.required]],
     idperiodo:['',[      ]],
     tipoexamen: 'Laboratorio sangre',
    glucoser:'',
    ureaser:'',
    nitroureo:'',
    creatinina:'',
    relacionbun:'',
    hemogluco:'',
    sangretipo:'',


    fecha:''
    
    
    })

    
   
    this.exForm.controls.fecha.setValue(this.todaystring);
      
     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.art=params
      
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })
     //this.aForm.get('idperiodo').setValue(this.art.idperiodo);
     this.exForm.controls['idperiodo'].setValue(this.art.idperiodo);

     if(this.art.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     { 
     this.getex(this.art.id);



    // console.log(this.art.id);
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      //this.getEmpleado(this.equipo.id);
 
     } /*
     if(this.art.idempleado !=undefined)
     {
      this.exForm.get('idempleado').setValue(this.art.idempleado);
     (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;

     }
     
     if(this.art.nombre !=undefined)
     {
      this.exForm.get('nombre').setValue(this.art.nombre);
     (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;

     }*/

     
 }



 onSubmit(customerData)
 {console.log("submitted");
 //this.tForm.reset();
                                    //if this equipo not come from list, new, else patch
 if(this.art.id !=undefined){     
     console.log("not null patch no post");
     this.putturno(customerData,Number(this.art.id))
 }else{
   this.posturno(customerData);
 }

 //this.posturno(customerData);
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
posturno(customerData)
 {
   this.http.post(Constantes.capiURL+"Sangres",customerData).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['mensaje']);   //debe decir agregadooo
     this.router.navigate(['/']);}else{

       window.alert(data['mensaje']);// + '    No autorizado');
       this.router.navigate(['/']);

     }
   }, 
     error =>{
       console.log(error);
       window.alert("Registro falló: "+ error.error.message);
     
   });
 }

 putturno(customerData,idd: number)
 {  
  
   this.http.post(Constantes.capiURL+"Sangres"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }


 updateform(json)
 {
     
      this.exForm.patchValue({
        id: json.id,
        idempleado:json.idempleado,
        idperiodo:json.idperiodo,
        
        tipoexamen: json.tipoexamen,
       glucoser:json.glucoser,
       ureaser:json.ureaser,
       nitroureo:json.nitroureo,
       creatinina:json.creatinina,
       relacionbun:json.relacionbun,
       hemogluco:json.hemogluco,
       sangretipo:json.sangretipo,
        
     fecha:json.fecha,
    


 });
 console.log("after updateform....");
  }

/*
 putempleado(customerData,idd: number)
 {  
   console.log(idd); 
   
   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Empleado"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{console.log(error);}
     );
 }*/

 getex(index)
 { 
  //console.log(Constantes.capiURL+"Audios1"+'/'+index);

   this.http.get(Constantes.capiURL+"Sangre1"+'/'+index).subscribe(data =>
     {console.log(data);
      this.exs = data['data'];   // now is first of arrat???   //failed bc data instaead of new data[data]    //NOT STANDARIZED APIREST
      console.log(this.exs);
      if(data['status'] == "success"){

        this.updateform(this.exs);
        //console.log(data);
      //window.alert(data['mensaje']);   //debe decir agregadooo
      //this.router.navigate(['/']);}
      }else{
 
        window.alert(data['mensaje']);// + '    No autorizado');
        this.router.navigate(['/']);
 
      }
      /*
      if(this.art.idempleado !=undefined)
      {
       this.exForm.get('idempleado').setValue(this.art.idempleado);
      (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;
 
      }
      
      if(this.art.nombre !=undefined)
      {
       this.exForm.get('nombre').setValue(this.art.nombre);
      (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;
 
      }*/
 
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
  }
}
