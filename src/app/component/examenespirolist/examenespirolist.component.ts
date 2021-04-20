import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-examenespirolist',
  templateUrl: './examenespirolist.component.html',
  styleUrls: ['./examenespirolist.component.css']
})
export class ExamenespirolistComponent implements OnInit {

  eqs: any;
  querid: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';

  term: string = '';
 p: number = 1;
 
  constructor(private http :HttpClient, private router2: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id);
      this.querid=params;
     
      //console.log(this.querid.id);

    })

    //console.log(Constantes.capiURL+"Turno/"+ this.querid.id);

    this.http.get(Constantes.capiURL+"Audios/"+ this.querid.id).subscribe(data => 
         
      {
        

        if(data['status'] == "success"){

          this.eqs = data['data'];
          console.log(this.eqs);
         
        }else{
   
          window.alert(data['mensaje'] + "Falló consulta");// + '    No autorizado');
         
   
        }
      }, 
        error =>{
          console.log(error);
          window.alert("Error: "+ error.error.message);
        
      });



    }

    nuevoex()
    {
      this.router.navigate(['audioex'],{
        queryParams:{
          idempleado:this.querid.id,
          nombre:this.querid.nombre
         
        }


    })
  }

  editarex(equipo:any)
  {
    this.router.navigate(['audioex'],{
      queryParams:{
        id:equipo.id,
        idempleado:this.querid.id,
        nombre:this.querid.nombre
       
      }


  })
}


gotoexgraf()
    {
      this.router.navigate(['audioexgraf'],{
        queryParams:{
          idempleado:this.querid.id,
          nombre:this.querid.nombre
         
        }


    })
  }

   
  }