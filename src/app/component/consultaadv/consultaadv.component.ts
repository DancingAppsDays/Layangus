import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-consultaadv',
  templateUrl: './consultaadv.component.html',
  styleUrls: ['./consultaadv.component.css']
})
export class ConsultaadvComponent implements OnInit {

  pForm: FormGroup;
  art:any;
  exs:any;
  successdata: any;
  success: boolean;
  todaystring:any;
  
  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.pForm = this.formBuilder.group({
     date:Date.now(),
     puesto:'',
     horario:'',
     area:'',
     idmaquina:'',
      idempleado:''

     
    
    
    })
   
      
     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.art=params
      
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })

//this.todaystring = this.today.toISOString();
    //this.todaystring =this.todaystring.substring(10,0);
    //console.log(this.todaystring);  //FORMA VIABLE

    this.todaystring= formatDate(Date.now(),'yyyy-MM-dd','en-US')  //OTRA FORMA VIABLE...
   
    this.pForm.controls.date.setValue(this.todaystring);


     if(this.art.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     { this.pForm.get('id').setValue(this.art.id);
     (<HTMLInputElement>document.getElementById('id')).readOnly = true;
     
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      this.getpuesto(this.art.id);
      console.log("after get puesto");
     }

    // this.getEmpleado(this.equipo.id);
 }



 onSubmit(customerData)
 {//console.log("submitted");
 //this.tForm.reset();
 console.log(customerData);
 console.log(customerData.puesto);
 console.log(customerData.horario);
                                   //if this equipo not come from list, new, else patch
  this.getpuesto(customerData);
                               
  /*
 if(this.art.id !=undefined){     
     //console.log("not null patch no post");
     this.putpuesto(customerData,Number(this.art.id))
 }else{
   this.postpuesto(customerData);
 }*/

 
 //this.equipo.id =undefined;         //to prevent over overwrite??
}


postpuesto(customerData)
 {
   this.http.post(Constantes.capiURL+"Puesto",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe((res: Response) =>
     {
      this.successdata = res;
       if(this.successdata['status'] == "success"){

       console.log(this.successdata);
     window.alert(this.successdata['mensaje']);   //debe decir agregadooo
     this.router.navigate(['/']);}else{

       window.alert(this.successdata['mensaje']);// + '    No autorizado');
       this.router.navigate(['/']);

     }
   }, 
     error =>{
       console.log(error);
       window.alert("Error de registro: "+ error.error.message);
     
   });
 }


 getpuesto(index)
 { 
   this.http.get(Constantes.capiURL+"Turnof"+"/"+index.date+"/"+index.horario).subscribe(data =>
     {console.log(data);
      this.exs = data['data'];   // now is first of arrat???   //failed bc data instaead of new data[data]    //NOT STANDARIZED APIREST
      console.log(this.exs);
      if(data['status'] == "success"){

        this.updateform(this.exs);
        //console.log(data);
      //window.alert(data['mensaje']);   //debe decir agregadooo
      //this.router.navigate(['/']);}
      }else{
 
        window.alert(data['mensaje']);// + '    No autorizado');
        this.router.navigate(['/']);
 
      }
      
      
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }

 putpuesto(customerData,idd: number)
 {   
   /*console.log(idd+ "almacenar"); 
   this.eqForm.patchValue({
    id: idd})*/     //dont patch enouff fast! ! ! !



   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Puesto"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }


 updateform(json)
 {
     
      this.pForm.patchValue({
        id: json.id,
        nombre: json.nombre,//  this.exs.nombre,
        positionx: json.positionx,
        positiony: json.positiony,
        area:json.area,
        idmaquina: json.idmaquina,
        descripcion:json.descripcion

 });
 console.log("after updateform....");
  }



}
