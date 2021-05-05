import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-examenlaborinalist',
  templateUrl: './examenlaborinalist.component.html',
  styleUrls: ['./examenlaborinalist.component.css']
})
export class ExamenlaborinalistComponent implements OnInit {

  
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

    this.http.get(Constantes.capiURL+"Orinas/"+ this.querid.id).subscribe(data => 
         
      {
        //console.log(data);
        //this.eqs = data;//['data'];
        //console.log(this.eqs);

        if(data['status'] == "success"){

          this.eqs = data['data'];
          console.log(this.eqs);
          //console.log(data);
        //window.alert(data['mensaje']);   //debe decir agregadooo
        //this.router.navigate(['/']);}
        }else{
   
          window.alert(data['mensaje'] + "Falló consulta");// + '    No autorizado');
          //this.router.navigate(['/']);
   
        }
      }, 
        error =>{
          console.log(error);
          window.alert("Error: "+ error.error.message);
        
      });


        //this.eqs = result;//data;
       
        //console.log(this.eqs);
     // });


    }

    nuevoex()
    {
      this.router.navigate(['examenlaborina'],{
        queryParams:{
          idempleado:this.querid.id,
          nombre:this.querid.nombre
         
        }


    })
  }

  editarex(equipo:any)
  {
    this.router.navigate(['examenlaborina'],{
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