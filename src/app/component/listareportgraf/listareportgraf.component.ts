import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listareportgraf',
  templateUrl: './listareportgraf.component.html',
  styleUrls: ['./listareportgraf.component.css']
})
export class ListareportgrafComponent implements OnInit {

  
  url = Constantes.capiURL + "Reportem/";

  //urlxxxxx: string = "https://novatechdpw2.000webhostapp.com/api/Reportem/";
  //urlz: string = "http://127.0.0.1:8000/api/Reportem/";    //could be reportem1 " para un single reporte by ID"
  eqs: any;
  querid: any;
  id: string = '';


  constructor(private http :HttpClient, private router: Router, private router2: ActivatedRoute) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      //console.log(params);
      //console.log(params.id);
      this.querid=params;
     
      //console.log(this.querid.id);

    })

    this.http.get(Constantes.capiURL+"Reportem/"+ this.querid.id).subscribe(result => 
         
      {//this.emps =result.json();
        this.eqs = result;//data;
       
        console.log(this.eqs);
      });

    }
    

    abrirreporte(equipo:any){
      this.router.navigate(['reportsingle'],{
        queryParams:{
          id:equipo.idempleado,//,  //id of reporte, no idempleado
          nombre:this.querid.nombre
          
          //nombre:equipo.nombre
        }
  
       })
    }



}