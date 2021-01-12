import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-empleadoedit',
  templateUrl: './empleadoedit.component.html',
  styleUrls: ['./empleadoedit.component.css']
})
export class EmpleadoeditComponent implements OnInit {
  empForm: FormGroup;
  equipo:any;

  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.empForm = this.formBuilder.group({
     id: '',nombre:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      puesto: ''})

     this.router2.queryParams.subscribe(async (params:Params)=>{
       console.log(params)
       console.log(params.id)
       this.equipo=params
       this.empForm.get('id').setValue(this.equipo.id)
       this.empForm.get('nombre').setValue(this.equipo.nombre)
       this.empForm.get('puesto').setValue(this.equipo.puesto)
       console.log(this.equipo.id)
     })
 }



 onSubmit(customerData)
 {console.log("submitted");
 this.empForm.reset();
                                     //if this equipo not come from list, new, else patch
 if(this.equipo.id !=undefined){     
     console.log("not null patch no post");
     this.putempleado(customerData,Number(this.equipo.id))
 }else{
   this.postempleado(customerData);
 }
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
postempleado(customerData)
 {
   this.http.post(Constantes.capiURL+"Empleado",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['data']);   //debe decir agregadooo
     this.router.navigate(['/']);}else{

       window.alert(data['data']);// + '    No autorizado');
       this.router.navigate(['/']);

     }/*
   }, 
     error =>{
       console.log(error);
       window.alert("Error: "+ error);
     }*/
   });
 }

 putempleado(customerData,idd: number)
 {  
   console.log(idd); 
   
   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Empleado"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{console.log(error);}
     );
 }

 getEmpleado(index)
 { 
   this.http.get(Constantes.capiURL+"Empleado"+'/'+index).subscribe(data =>
     {console.log(data);
       this.empForm.get("name").setValue(data)
       //this.empm.name =
       //this.empm = data;
       this.updateform(data);
     }, 
     error =>{console.log(error);},


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }

 updateform(data)
 {


 }
}
