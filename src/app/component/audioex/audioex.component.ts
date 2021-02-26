import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-audioex',
  templateUrl: './audioex.component.html',
  styleUrls: ['./audioex.component.css']
})
export class AudioexComponent implements OnInit {

  aForm: FormGroup;
  art:any;
  today = new Date;//Date.now();
  todaystring:any;
  exs:any;
//tooday = this.today.format('MM/DD/YYYY hh:mm A');


  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.aForm = this.formBuilder.group({
     id: '',
     idempleado:['',[Validators.required]],
    nombre:'',
     fecha:'',
     
     i250:'',
     i500:'',
     i1000:'',
     i2000:'',
     i3000:'',
     i4000:'',     
     i6000:'',
     i8000:'',

     d250:'',
     d500:'',
     d1000:'',
     d2000:'',
     d3000:'',
     d4000:'',
     d6000:'',
     d8000:'',

     bi250:'',
     bi500:'',
     bi1000:'',
     bi2000:'',
     bi3000:'',
     bi4000:'',     
     bi6000:'',
     bi8000:'',

     bd250:'',
     bd500:'',
     bd1000:'',
     bd2000:'',
     bd3000:'',
     bd4000:'',
     bd6000:'',
     bd8000:'',


      descripcion:''
    
    })

    //this.todaystring = this.today.toISOString();
    //this.todaystring =this.todaystring.substring(10,0);
    //console.log(this.todaystring);  //FORMA VIABLE

    this.todaystring= formatDate(this.today,'yyyy-MM-dd','en-US')  //OTRA FORMA VIABLE...
   
    this.aForm.controls.fecha.setValue(this.todaystring);
      
     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.art=params
      
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })

     if(this.art.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     { 
     this.getex(this.art.id);
    // console.log(this.art.id);
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      //this.getEmpleado(this.equipo.id);
 
     } 
     if(this.art.idempleado !=undefined)
     {
      this.aForm.get('idempleado').setValue(this.art.idempleado);
     (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;

     }
     if(this.art.nombre !=undefined)
     {
      this.aForm.get('nombre').setValue(this.art.nombre);
     (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;

     }

     
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
   this.http.post(Constantes.capiURL+"Audios",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
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
   /*console.log(idd+ "almacenar"); 
   this.eqForm.patchValue({
    id: idd})*/     //dont patch enouff fast! ! ! !



   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Audios"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }


 updateform(json)
 {
     
      this.aForm.patchValue({
        id: json.id,
        idempleado:json.idempleado,
        nombre: json.nombre,
        
     fecha:json.fecha,
     
     i250:json.i250,
     i500:json.i500,
     i1000:json.i1000,
     i2000:json.i2000,
     i3000:json.i3000,
     i4000:json.i4000,     
     i6000:json.i6000,
     i8000:json.i8000,

     d250:json.d250,
     d500:json.d500,
     d1000:json.d1000,
     d2000:json.d2000,
     d3000:json.d3000,
     d4000:json.d4000,
     d6000:json.d6000,
     d8000:json.d8000,

     bi250:json.bi250,
     bi500:json.bi500,
     bi1000:json.bi1000,
     bi2000:json.bi2000,
     bi3000:json.bi3000,
     bi4000:json.bi4000,     
     bi6000:json.bi6000,
     bi8000:json.bi8000,

     bd250:json.bd250,
     bd500:json.bd500,
     bd1000:json.bd1000,
     bd2000:json.bd2000,
     bd3000:json.bd3000,
     bd4000:json.bd4000,
     bd6000:json.bd6000,
     bd8000:json.bd8000,
        descripcion:json.descripcion,




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

   this.http.get(Constantes.capiURL+"Audios1"+'/'+index).subscribe(data =>
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
      
      if(this.art.idempleado !=undefined)
      {
       this.aForm.get('idempleado').setValue(this.art.idempleado);
      (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;
 
      }
      if(this.art.nombre !=undefined)
      {
       this.aForm.get('nombre').setValue(this.art.nombre);
      (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;
 
      }
 
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }


 checkbone(e)
  {

//console.log(e.target.checked)
//if(e.target.checked){
  document.getElementById('bone').style.visibility = e.target.checked?"visible":"hidden";

//}
  }

}
