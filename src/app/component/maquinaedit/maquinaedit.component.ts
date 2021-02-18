import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/constantes';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maquinaedit',
  templateUrl: './maquinaedit.component.html',
  styleUrls: ['./maquinaedit.component.css']
})
export class MaquinaeditComponent implements OnInit {
  eqForm: FormGroup;
  equipo:any;
  exs:any;

  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.eqForm = this.formBuilder.group({
     id: '',
     nombre:['',[Validators.required,]],  // Validators.pattern('^[a-zA-Z ]*$')
      puesto: '',
      area:1,
      polvo:0,
      positionx:0,
      positiony:0,
      riskfactor:0,
      ruido:0,
      lastcheck:''
    
    })

     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.equipo=params
       this.eqForm.get('id').setValue(this.equipo.id)
       //this.eqForm.get('nombre').setValue(this.equipo.nombre)
       //this.eqForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })

     if(this.equipo.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
    {
     //cambiarbotonsave();
     //this.editar = true; //declara que el submit editara no creara nuevo registro
     this.getEmpleado(this.equipo.id);

     //this.eqForm.get('id').setValue(this.equipo.id)   //could be even befo

    }
 }



 onSubmit(customerData)
 {//console.log("submitted");
 //this.eqForm.reset();
                                     //if this equipo not come from list, new, else patch
 if(this.equipo.id !=undefined){     
     //console.log("not null patch no post");
     this.putempleado(customerData,Number(this.equipo.id))
 }else{
   this.postempleado(customerData);
 }
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
postempleado(customerData)
 {
   this.http.post(Constantes.capiURL+"Maquina",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['mensaje']);   //debe decir agregadooo
     this.router.navigate(['/']);}
     else{

       window.alert(data['mensaje']  + "  Registro falló");// + '    No autorizado');
       //this.router.navigate(['/']);

     }
    }, 
     error =>{
       console.log(error);
       window.alert("Error: Registro falló "+ error);
     }
   );
 }

 putempleado(customerData,idd: number)
 {  
   /*console.log(idd+ "almacenar"); 
   this.eqForm.patchValue({
    id: idd})*/     //dont patch enouff fast! ! ! !



   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Maquina"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }

 getEmpleado(index)
 { 
   this.http.get(Constantes.capiURL+"Maquina"+'/'+index).subscribe(data =>
     {console.log(data);
      this.exs = data['data']; //failed bc data instaead of new data[data]    //NOT STANDARIZED APIREST
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
      //window.alert(data['mensaje']);


       //this.eqForm.get("name").setValue(data)
       //this.empm.name =
       //this.empm = data;
     
      
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }
 
 updateform(json)
 {
    if(json.lastcheck != null)
    var fecha = json.lastcheck.substring(0,10);  //prone to fail if not correct on data
    
 
      this.eqForm.patchValue({
        nombre: json.nombre,//  this.exs.nombre,
        puesto:  json.puesto,
        area:json.area,
        polvo:json.polvo,
        positionx:json.positionx,
        positiony: json.positiony,
        riskfactor:json.riskfactor,
        ruido: json.ruido,
        lastcheck: fecha//json.lastcheck //was fecha? workedddd?

 });

  }
}
