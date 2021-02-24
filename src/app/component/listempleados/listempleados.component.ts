import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpserviceService } from 'src/app/service/httpservice.service';

import {map} from 'rxjs/operators';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listempleados',
  templateUrl: './listempleados.component.html',
  styleUrls: ['./listempleados.component.css']
})
export class ListempleadosComponent implements OnInit {
 
  token: string;
 sucessdata:any;
 //emps:any;
 eqs:any;
 term: string = '';
 p: number = 1;
 items = [];       

   pageOfItems: Array<any>;
   onChangePage(pageOfItems: Array<any>) {
     // update current page of items
     this.pageOfItems = pageOfItems;
 }


 
 constructor(private http :HttpClient,private router:Router ) { }

  //empsarray:any = [];
 ngOnInit(): void {

   // = localStorage.getItem('token');
   //window.alert(token
   //if(localStorage.getItem('token') === null)
   //{}else
    //this.token = localStorage.getItem('token');
   //window.alert(token);

   //this.http.get("https://realidad-virtual.amc-sc.mx/api/Empleado").subscribe(result => 
   this.http.get(Constantes.capiURL+"Empleado").subscribe(result => 
   {//this.emps =result.json();
     this.eqs = result;//data;
     
     console.log(this.eqs);
    
       this.sucessdata = result;
       if(this.sucessdata['status'] == "success"){

    // window.alert("Datos recuperados  con éxito con sesion");
       
       //this.emps =result.json();
       this.emps = this.sucessdata['data'];         // result;//this.sucessdata;//data;
       
       //this.emps.push(data);  
         this.items.push(this.emps);
       
      // data.forEach(item => {
      //   this.emps.next(item);
     //  });
       //this.emps = this.empsarray.json();
       console.log(this.items);//}}
      
     }else {
       window.alert(this.sucessdata['data'] + '    No autorizado');
       this.router.navigate(['/']);
       //window.alert("Datos no pudieron ser recuperados");

     }
       //else  window.alert(this.sucessdata['data'] + "->  Error sesion no iniciada");
     });
 }
 editEmps(equipo: any){
   console.log(equipo)
   this.router.navigate(['empleadoform'],{
     queryParams:{
       id:equipo.id,
       nombre:equipo.nombre,
       puesto:equipo.puesto
     }
   })

 }
 nuevoemp(){
  //console.log(equipo)
  this.router.navigate(['empleadoform']);/*,{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre,
      puesto:equipo.puesto
    }
  })*/

}


 gototurnos(equipo:any){
   this.router.navigate(['turnosform'],{
     queryParams:{
       id:equipo.id,
       nombre:equipo.nombre
     }

 })
}

gotoaudios(equipo:any){
  this.router.navigate(['listaaudios'],{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre
    }

})
}


gotoexamenes(equipo:any){
  this.router.navigate(['examemperiodlist'],{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre
    }

})
}
gotonuevoexamen(equipo:any){
  this.router.navigate(['examemperiod'],{
    queryParams:{
      idempleado:equipo.id,
      nombre:equipo.nombre
    }

})
}
gotoincidenteslist(equipo:any){
  this.router.navigate(['listaincidentes'],{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre,
      idempleado:equipo.idempleado,
    }

})
}

gotoreportes(equipo:any){
  this.router.navigate(['reportsingle'],{
    queryParams:{
      id:equipo.id,
      idempleado:equipo.id,
      nombre:equipo.nombre
    }

})
}
gotoincidentes(equipo:any){
  this.router.navigate(['incidentes'],{
    queryParams:{
      id:equipo.id,
      idempleado:equipo.id,
      nombre:equipo.nombre
    }

})
}
gotoexpediente(equipo:any){
  this.router.navigate(['expedientem'],{
    queryParams:{
      idempleado:equipo.id,
      nombre:equipo.nombre
    }

})
}


 id: string='' ;
 created_at: string ='';
 name: string ='';
 puesto: string ='';
 emps: Object;    //was object 1
 result: any;
}

