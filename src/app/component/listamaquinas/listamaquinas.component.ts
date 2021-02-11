import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-listamaquinas',
  templateUrl: './listamaquinas.component.html',
  styleUrls: ['./listamaquinas.component.css']
})
export class ListamaquinasComponent implements OnInit {

  eqs: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';
  sucessdata:any;

  constructor(private _http: HttpClient,private router:Router) {

  }

  ngOnInit(): void {

    //this.http.get(this.url3,{ headers: { Authorization:localStorage.getItem('token') } })
    this._http.get(Constantes.capiURL+"Maquina").subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){

      this.eqs = this.sucessdata['data'];
      }else{
        window.alert(this.sucessdata['data']);// + '    No autorizado');
        this.router.navigate(['/']);

      }
    })
  }
  nuevoeq(){
    //console.log(equipo)
    this.router.navigate(['equipos']);
  }



  editEquipo(equipo: any){
    console.log(equipo)
    this.router.navigate(['equipos'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre,
        puesto:equipo.puesto
      }
    })

  }

  

}
