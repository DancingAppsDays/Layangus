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
  today = Date.now();

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
    this.tForm.controls.fecha.setValue(this.today);
      
     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.art=params
      
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })

     if(this.art.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     { this.tForm.get('idempleado').setValue(this.art.id)
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      //this.getEmpleado(this.equipo.id);
 
     }

    // this.getEmpleado(this.equipo.id);
 }



 onSubmit(customerData)
 {console.log("submitted");
 //this.tForm.reset();
 /*                                    //if this equipo not come from list, new, else patch
 if(this.equipo.id !=undefined){     
     console.log("not null patch no post");
     this.putempleado(customerData,Number(this.equipo.id))
 }else{
   this.postempleado(customerData);
 }
*/
 this.posturno(customerData);
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
posturno(customerData)
 {
   this.http.post(Constantes.capiURL+"Turno",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['data']);   //debe decir agregadooo
     this.router.navigate(['/']);}else{

       window.alert(data['data']);// + '    No autorizado');
       this.router.navigate(['/']);

     }/*
   }, 
     error =>{
       console.log(error);
       window.alert("Error: "+ error);
     }*/
   });
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
}
