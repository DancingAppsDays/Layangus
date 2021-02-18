import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listpuesto',
  templateUrl: './listpuesto.component.html',
  styleUrls: ['./listpuesto.component.css']
})
export class ListpuestoComponent implements OnInit {

  eqs: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';
  sucessdata:any;

  term: string = '';
 p: number = 1;

  constructor(private _http: HttpClient,private router:Router) {

  }

  ngOnInit(): void {

    //this.http.get(this.url3,{ headers: { Authorization:localStorage.getItem('token') } })
    this._http.get(Constantes.capiURL+"Puesto").subscribe(data => {

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
    this.router.navigate(['puestos']);
  }



  editpuesto(equipo: any){
    console.log(equipo)
    this.router.navigate(['puestos'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre
       
      }
    })

  }

  

}