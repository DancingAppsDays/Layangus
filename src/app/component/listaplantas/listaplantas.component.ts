import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listaplantas',
  templateUrl: './listaplantas.component.html',
  styleUrls: ['./listaplantas.component.css']
})
export class ListaplantasComponent implements OnInit {

  
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
    this._http.get(Constantes.capiURL+"Planta").subscribe(data => {

      this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){

      this.eqs = this.sucessdata['data'];
      }else{
        window.alert(this.sucessdata['data']);// + '    No autorizado');
        this.router.navigate(['/']);

      }
    })
  }
  nuevaarea(){
    //console.log(equipo)
    this.router.navigate(['plantaedit']);
  }



  editpuesto(equipo: any){
    console.log(equipo)
    this.router.navigate(['plantaedit'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre
       
      }
    })

  }

  


}
