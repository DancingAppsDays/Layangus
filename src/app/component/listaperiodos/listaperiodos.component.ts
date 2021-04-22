import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listaperiodos',
  templateUrl: './listaperiodos.component.html',
  styleUrls: ['./listaperiodos.component.css']
})
export class ListaperiodosComponent implements OnInit {


  successdata:any;
  json: any;
  querid: any;
  id: string = '';
  url = Constantes.capiURL + "Experiod/";  
  menuexas: boolean = false;
  exForm: any;
  ex:any;
 

  constructor(private formBuilder: FormBuilder, private http :HttpClient, private router2: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.exForm = this.formBuilder.group({
      id: ['', [
       //Validators.required,
            ]],
      idempleado: ['', [
              //Validators.required,
                   ]],
                  fecha: ['', [
                    Validators.required,
                         ]],
                ingreso:'',
                examenmeb:'',
                audiob:'',
                espirob:'',
                rayoxb:'',
                labsangreb:'',
                laborinab:''

      
     })
 
      this.router2.queryParams.subscribe(async (params:Params)=>{
        //console.log(params)
        //console.log(params.id)
        this.ex=params;
       // console.log(this.ex)
        this.querid=params
        this.exForm.get('idempleado').setValue(this.ex.idempleado);
        
        //this.empForm.get('nombre').setValue(this.equipo.nombre)
        //this.empForm.get('puesto').setValue(this.equipo.puesto)
       // console.log(this.ex.id)
      })
 
      if(this.ex.idempleado != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
      {
       //cambiarbotonsave();
       //this.editar = true; //declara que el submit editara no creara nuevo registro

       //console.log("GET DASTAAA");
       this.getdata();//this.ex.id);
  
      }
   


}

getdata()
{


  this.http.get(this.url+ this.ex.idempleado).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];

        console.log(this.json)

        }else{
          window.alert(this.successdata['data']);// + '    No autorizado');
          //this.router.navigate(['/']);    
          //(<any>this.router).navigate(['/']); //COMPilation errorr check package.hjson... 
        }

    }
      );

}

verexa(equipo:any){
  this.router.navigate(['periodetalle'],{
    queryParams:{
      id:equipo.id,
      idempleado:equipo.idempleado,
      nombre:this.querid.nombre
    }

})
}

onSubmit(customerData)
 {console.log("submitted");
 //this.tForm.reset();
                                    //if this equipo not come from list, new, else patch
 if(this.querid.id !=undefined){     
     console.log("not null patch no post");
     //this.putturno(customerData,Number(this.art.id))
 }else{
   this.posturno(customerData);
 }

 //this.posturno(customerData);
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
posturno(customerData)
 {
   this.http.post(Constantes.capiURL+"Experiod",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['mensaje']);   //debe decir agregadooo
   
     this.router.navigate(['periodicos'],{
      queryParams:{
        idempleado:this.querid.idempleado,
        nombre:this.querid.nombre
      }}).then(()=>{
        window.location.reload();
      });
    
    
    
    }else{

       window.alert(data['mensaje']);// + '    No autorizado');
       this.router.navigate(['/']);

     }
   }, 
     error =>{
       console.log(error);
       window.alert("Registro falló: "+ error.error.message);
     
   });
 }
























editexa(examen: any)
{

    console.log(examen)
    this.router.navigate(['examemperiod'],{
      queryParams:{
        id:examen.id,
        idempleado: examen.idempleado,
        nombre: this.querid.nombre,
        //puesto:examen.puesto
      }
    })

  }  
  nuevoexamen(equipo:any){
    this.router.navigate(['examemperiod'],{
      queryParams:{
        idempleado:equipo.id,
        nombre:equipo.nombre
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

  //NUEVO diseño para cont..

  abrirmenuexa()
{
  if(this.menuexas ==false)
  this.menuexas = true;
  else this.menuexas = false;

}

gotoaudios(equipo:any){     //UNUSED HERE?
  this.router.navigate(['listaaudios'],{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre
    }

})
}
nuevoau()
{
  this.router.navigate(['audioex'],{
    queryParams:{
      idempleado:this.querid.id,
      nombre:this.querid.nombre
     
    }


})
}



verestudio(id:any,idempleado: any,nombre:any, tipoexamen:any)  //more like graficar
{

  if(tipoexamen == 'audiometria')
  {
    this.router.navigate(['audioex'],{
      queryParams:{
        id:id,
        idempleado:idempleado,
        nombre:nombre
       
      }


  })

  }else if(tipoexamen == 'periodico')
  {
    //console.log(examen)
    this.router.navigate(['examemperiod'],{
      queryParams:{
        id:id,
        idempleado: this.querid.idempleado,
        nombre: this.querid.nombre,
        //puesto:examen.puesto
      }
    })

  }


}
}