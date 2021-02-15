import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-turnosempleado',
  templateUrl: './turnosempleado.component.html',
  styleUrls: ['./turnosempleado.component.css']
})
export class TurnosempleadoComponent implements OnInit {

  eqs: any;
  querid: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';
  constructor(private http :HttpClient, private router2: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id);
      this.querid=params;
     
      //console.log(this.querid.id);

    })

    this.http.get(Constantes.capiURL+"Turno/"+ this.querid.id).subscribe(result => 
         
      {//this.emps =result.json();
        this.eqs = result;//data;
       
        console.log(this.eqs);
      });


    }

    nuevoturn()
    {
      this.router.navigate(['turnonew'],{
        queryParams:{
          id:this.querid.id,
          nombre:this.querid.nombre
         
        }


    })
  }

    adduso(equipo:any){
      this.router.navigate(['usodetailnew'],{
        queryParams:{
          id:equipo.id,
          nombre:this.querid.nombre,
          idempleado:equipo.idempleado,
          fecha:equipo.fecha
        }
   
    })
   }
  }