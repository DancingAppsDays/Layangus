import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-turnoanadir',
  templateUrl: './turnoanadir.component.html',
  styleUrls: ['./turnoanadir.component.css']
})
export class TurnoanadirComponent implements OnInit {
  tForm: FormGroup;
  art:any;
  today = new Date;//Date.now();
  todaystring:any;
  exs:any;
//tooday = this.today.format('MM/DD/YYYY hh:mm A');


  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.tForm = this.formBuilder.group({
     id: '',
     idempleado:['',[Validators.required]],
     //nombre:['',[Validators.required, Validators.pattern('[^",]')]],
     fecha:'',//this.today,//['',[Validators.required]],
     horario:'',
      puesto: '',
      area:'',
      idmaquina:''
    
    
    })

    //this.todaystring = this.today.toISOString();
    //this.todaystring =this.todaystring.substring(10,0);
    //console.log(this.todaystring);  //FORMA VIABLE

    this.todaystring= formatDate(this.today,'yyyy-MM-dd','en-US')  //OTRA FORMA VIABLE...
   
    this.tForm.controls.fecha.setValue(this.todaystring);
      
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
     this.getturno(this.art.id);
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      //this.getEmpleado(this.equipo.id);
 
     } 
     if(this.art.idempleado !=undefined)
     {
      this.tForm.get('idempleado').setValue(this.art.idempleado);
     (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;

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
   this.http.post(Constantes.capiURL+"Turno",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
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
   this.http.post(Constantes.capiURL+"Turno"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }


 updateform(json)
 {
     
      this.tForm.patchValue({
        id: json.id,
        nombre: json.nombre,//  this.exs.nombre,
        positionx: json.positionx,
        positiony: json.positiony,
        area:json.area,
        idmaquina: json.idmaquina,
        descripcion:json.descripcion

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

 getturno(index)
 { 
   this.http.get(Constantes.capiURL+"Turno1"+'/'+index).subscribe(data =>
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
      
      
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }
}
