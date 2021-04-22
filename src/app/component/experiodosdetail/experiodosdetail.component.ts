import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-experiodosdetail',
  templateUrl: './experiodosdetail.component.html',
  styleUrls: ['./experiodosdetail.component.css']
})
export class ExperiodosdetailComponent implements OnInit {



  successdata:any;
  json: any;
  querid: any;
  id: string = '';
  url = Constantes.capiURL + "Experiod1/";//show specific ex not all from idempleado
  menuexas: boolean = false;
  exForm: any;
  ex:any;

  experio:boolean= true;
  exaudio:boolean= false;
  exespir:boolean= false;
  //exper:boolean= false;
 

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
      /*
                         realizado: ['', [
                          //Validators.required,
                               ]],
     
     */
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


  this.http.get(this.url+ this.ex.id).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];
        this.changecolors();
        console.log(this.json);

        }else{
          window.alert(this.successdata['data']);// + '    No autorizado');
          //this.router.navigate(['/']);    
          //(<any>this.router).navigate(['/']); //COMPilation errorr check package.hjson... 
        }

    }
      );

}


getdataaudio()
{


  this.http.get(Constantes.capiURL + "Audioperiod/"+ this.ex.id).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];
        //let array:[] = this.json;
        //console.log(array);

        if(this.json != null)
        {
          console.log("not empty");
          this.router.navigate(['audioex'],{
            queryParams:{
              id:this.json.id,
              idempleado:this.querid.idempleado,
              nombre:this.querid.nombre,
              idperiodo:this.ex.id
           } })
        }
        else{
          console.log("empty make newww");
          this.router.navigate(['audioex'],{
            queryParams:{
             
              idempleado:this.querid.idempleado,
              nombre:this.querid.nombre,
              idperiodo:this.ex.id
           } })
        }

        }else{
          window.alert(this.successdata['data']);
        }

    }, error =>{ 
      window.alert("Error de conexión");   //error.message);
    console.log(error.message);}

      );
}

getdataexa()
{


  this.http.get(Constantes.capiURL + "Examenmeperiod/"+ this.ex.id).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];
        

        if(this.json != null)
        {
          console.log("not empty");
          this.router.navigate(['examemperiod'],{
            queryParams:{
              id:this.json.id,
              idempleado:this.querid.idempleado,
              nombre:this.querid.nombre,
              idperiodo:this.ex.id
           } })
        }
        else{
          console.log("empty make newww");
          this.router.navigate(['examemperiod'],{
            queryParams:{
             
              idempleado:this.querid.idempleado,
              nombre:this.querid.nombre,
              idperiodo:this.ex.id
           } })
        }

        }else{
          window.alert(this.successdata['data']);
        }

    }, error =>{ 
      window.alert("Error de conexión");   //error.message);
    console.log(error.message);}

      );
}




gotoexamen(equipo:any){
  this.router.navigate(['examemperiod'],{
    queryParams:{
      idempleado:equipo.idempleado,
      nombre:equipo.nombre,
      idperiodo:this.ex.id
    }

})
}

gotoaudioOLD()
{
  this.router.navigate(['audioex'],{
    queryParams:{
      idempleado:this.querid.idempleado,
      nombre:this.querid.nombre,
      idperiodo:this.ex.id
     
    }


})
}

changecolors()
{




}


}