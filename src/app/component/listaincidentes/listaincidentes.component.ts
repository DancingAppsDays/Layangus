import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listaincidentes',
  templateUrl: './listaincidentes.component.html',
  styleUrls: ['./listaincidentes.component.css']
})
export class ListaincidentesComponent implements OnInit {

  successdata:any;
  json: any;
  querid: any;
  id: string = '';
  url = Constantes.capiURL + "Accidentes/";

  constructor(private http :HttpClient, private router2: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id + "id of params...");
      this.querid=params;

  });
  this.getdata();
/*
  this.http.get(this.url+ this.querid.id).subscribe(result => 
        
    {//this.emps =result.json();
      this.eqs = result;//data;
     
      console.log(this.eqs);
    });

*/
}
getdata()
{
  this.http.get(this.url+ this.querid.id).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];
        }else{
          window.alert(this.successdata['data']);// + '    No autorizado');
          //this.router.navigate(['/']);    
          //(<any>this.router).navigate(['/']); //COMPilation errorr check package.hjson... 
        }

    }
      );

}

editacci(examen: any)
{

    console.log(examen)
    this.router.navigate(['incidentes'],{
      queryParams:{
        id:examen.id,
        idempleado: examen.q,
        nombre:examen.nombre,
        //puesto:examen.puesto
      }
    })

  }
/*
  nuevoexamen(equipo:any){
    this.router.navigate(['examemperiod'],{
      queryParams:{
        idempleado:equipo.idempleado,
        nombre:equipo.nombre
      }
  
  })
  }*/
}
