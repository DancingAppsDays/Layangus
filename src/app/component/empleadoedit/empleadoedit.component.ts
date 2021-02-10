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
  profilestring: string;

  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.empForm = this.formBuilder.group({
     id: '',
     nombre:['',[Validators.required, Validators.pattern('[^",]')]],
      puesto: '',
      area:'',
      positionx:0,
      positiony:0,
      profilepic:""
    
    
    })

     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.equipo=params
       this.empForm.get('id').setValue(this.equipo.id)
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       console.log(this.equipo.id)
     })

     if(this.equipo.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     {
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      this.getEmpleado(this.equipo.id);
 
     }
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
       //this.empForm.get("name").setValue(data)
       //this.empm.name =
       //this.empm = data;
       //this.exs =  data;//data['dat'];     //NOT STANDARIZED APIREST
       this.updateform(data);
     }, 
     error =>{console.log(error);},


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }

 updateform(json)
 {

  this.empForm.patchValue({
    nombre: json.nombre,//  this.exs.nombre,
    puesto:  json.puesto,
    area:json.area,
    
    positionx:json.positionx,
    positiony: json.positiony,
    
    profilepic: json.profilepic

});
  this.showImage();

 }
 
 showImage()
 {
  this.profilestring =this.empForm.controls.profilepic.value;


 }

 encodeImageFileAsURL(element) {
 // var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(element);
}


  getBase64(event) {
  let me = this;
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  /*
  reader.onload = function () {
    //me.modelvalue = reader.result;
    //console.log(reader.result);
    //this.patchfile(reader.result);
   
  };*/
  reader.onload = (event:any) => {
    this.empForm.get('profilepic').setValue(reader.result);
    this.profilestring = reader.result.toString();
    console.log(this.profilestring);
}


  reader.onerror = function (error) {
    console.log('Error: ', error);
  };

  //console.log(reader.result);
  //this.patchfile(reader.result);
}

}
