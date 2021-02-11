import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private http :HttpClient, private router2: ActivatedRoute) { }

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
  }