import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Constantes } from 'src/app/constantes';

import xml2js from 'xml2js'; //REQUIERE NPM INSTALL TIMERS, Y STREAM TIMERS PARA UN ERROR! 


@Component({
  selector: 'app-audioex',
  templateUrl: './audioex.component.html',
  styleUrls: ['./audioex.component.css']
})
export class AudioexComponent implements OnInit {

  aForm: FormGroup;
  art:any;
  today = new Date;//Date.now();
  todaystring:any;
  exs:any;
//tooday = this.today.format('MM/DD/YYYY hh:mm A');
audiofileString:string;
//audiofileString

  constructor(    private formBuilder: FormBuilder ,private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
 
 
 
 ngOnInit(): void {
   
   this.aForm = this.formBuilder.group({
     id: '',
     idempleado:['',[Validators.required]],
    nombre:'',
     fecha:'',
     
     i250:'',
     i500:'',
     i1000:'',
     i2000:'',
     i3000:'',
     i4000:'',     
     i6000:'',
     i8000:'',

     d250:'',
     d500:'',
     d1000:'',
     d2000:'',
     d3000:'',
     d4000:'',
     d6000:'',
     d8000:'',

     bi250:'',
     bi500:'',
     bi1000:'',
     bi2000:'',
     bi3000:'',
     bi4000:'',     
     bi6000:'',
     bi8000:'',

     bd250:'',
     bd500:'',
     bd1000:'',
     bd2000:'',
     bd3000:'',
     bd4000:'',
     bd6000:'',
     bd8000:'',


      descripcion:''
    
    })

    //this.todaystring = this.today.toISOString();
    //this.todaystring =this.todaystring.substring(10,0);
    //console.log(this.todaystring);  //FORMA VIABLE

    this.todaystring= formatDate(this.today,'yyyy-MM-dd','en-US')  //OTRA FORMA VIABLE...
   
    this.aForm.controls.fecha.setValue(this.todaystring);
      
     this.router2.queryParams.subscribe(async (params:Params)=>{
       //console.log(params)
       //console.log(params.id)
       this.art=params
      
       //this.empForm.get('nombre').setValue(this.equipo.nombre)
       //this.empForm.get('puesto').setValue(this.equipo.puesto)
       //console.log(this.equipo.id)
     })

     if(this.art.id != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
     { 
     this.getex(this.art.id);
    // console.log(this.art.id);
     //this.tForm.get('nombre').setValue(this.art.nombre)
      //cambiarbotonsave();
      //this.editar = true; //declara que el submit editara no creara nuevo registro
      //this.getEmpleado(this.equipo.id);
 
     } 
     if(this.art.idempleado !=undefined)
     {
      this.aForm.get('idempleado').setValue(this.art.idempleado);
     (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;

     }
     if(this.art.nombre !=undefined)
     {
      this.aForm.get('nombre').setValue(this.art.nombre);
     (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;

     }

     
 }



 onSubmit(customerData)
 {console.log("submitted");
 //this.tForm.reset();
                                    //if this equipo not come from list, new, else patch
 if(this.art.id !=undefined){     
     console.log("not null patch no post");
     this.putturno(customerData,Number(this.art.id))
 }else{
   this.posturno(customerData);
 }

 //this.posturno(customerData);
 //this.equipo.id =undefined;         //to prevent over overwrite??
}
posturno(customerData)
 {
   this.http.post(Constantes.capiURL+"Audios",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe(data =>
     {
       if(data['status'] == "success"){

       console.log(data);
     window.alert(data['mensaje']);   //debe decir agregadooo
     this.router.navigate(['/']);}else{

       window.alert(data['mensaje']);// + '    No autorizado');
       this.router.navigate(['/']);

     }
   }, 
     error =>{
       console.log(error);
       window.alert("Registro falló: "+ error.error.message);
     
   });
 }

 putturno(customerData,idd: number)
 {  
   /*console.log(idd+ "almacenar"); 
   this.eqForm.patchValue({
    id: idd})*/     //dont patch enouff fast! ! ! !



   //lara dont allow put/patch, better fix in store
   this.http.post(Constantes.capiURL+"Audios"+'/'+idd, customerData).subscribe(data =>
     {console.log(data);
       window.alert("Elemento modificado correctamente");
       this.router.navigate(['/']);}, 
     error =>{ window.alert("  Registro falló");console.log(error);}
     );
 }


 updateform(json)
 {
     
      this.aForm.patchValue({
        id: json.id,
        idempleado:json.idempleado,
        nombre: json.nombre,
        
     fecha:json.fecha,
     
     i250:json.i250,
     i500:json.i500,
     i1000:json.i1000,
     i2000:json.i2000,
     i3000:json.i3000,
     i4000:json.i4000,     
     i6000:json.i6000,
     i8000:json.i8000,

     d250:json.d250,
     d500:json.d500,
     d1000:json.d1000,
     d2000:json.d2000,
     d3000:json.d3000,
     d4000:json.d4000,
     d6000:json.d6000,
     d8000:json.d8000,

     bi250:json.bi250,
     bi500:json.bi500,
     bi1000:json.bi1000,
     bi2000:json.bi2000,
     bi3000:json.bi3000,
     bi4000:json.bi4000,     
     bi6000:json.bi6000,
     bi8000:json.bi8000,

     bd250:json.bd250,
     bd500:json.bd500,
     bd1000:json.bd1000,
     bd2000:json.bd2000,
     bd3000:json.bd3000,
     bd4000:json.bd4000,
     bd6000:json.bd6000,
     bd8000:json.bd8000,
        descripcion:json.descripcion,




 });
 console.log("after updateform....");
  }

/*
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
 }*/

 getex(index)
 { 
  //console.log(Constantes.capiURL+"Audios1"+'/'+index);

   this.http.get(Constantes.capiURL+"Audios1"+'/'+index).subscribe(data =>
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
      
      if(this.art.idempleado !=undefined)
      {
       this.aForm.get('idempleado').setValue(this.art.idempleado);
      (<HTMLInputElement>document.getElementById('idempleado')).readOnly = true;
 
      }
      if(this.art.nombre !=undefined)
      {
       this.aForm.get('nombre').setValue(this.art.nombre);
      (<HTMLInputElement>document.getElementById('nombre')).readOnly = true;
 
      }
 
     }, 
     error =>{console.log(error);
    
      //window.alert(error['data']);

    },


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }


 checkbone(e)
  {

//console.log(e.target.checked)
//if(e.target.checked){
  document.getElementById('bone').style.visibility = e.target.checked?"visible":"hidden";

//}
  }


  readThis(event){//inputValue: any) { //: void {
    //var file: File = inputValue.files[0];

    
    var myReader: FileReader = new FileReader();

    let file = event.target.files[0];
    let reader = new FileReader();

    //reader.LoadXml()
    reader.readAsDataURL(file);

    reader.onload = (event:any) => {

      console.log("ONLOAD auidxml");
      //console.log(myReader.result); //NULL
     
    }
    







   // var fileType = event.parentElement.id;
    myReader.onloadend =  (e)=> {//function (e) {  //was messing shit up
        //myReader.result is a String of the uploaded file
       // console.log(myReader.result);
        //this.functiona();
        //this.audiostring()
        //this.audiofileString = "soma";
        let resu = myReader.result;

        this.audiofileString = resu as string;

        myReader.onloadend =  (e)=> {//function (e) {  //was messing shit up
          //myReader.result is a String of the uploaded file
          console.log(myReader.result);
         
      }



        console.log("preparse");
       // this.xmlchop(this.audiofileString);
         this.parseXML( this.audiofileString);

        console.log("afterparse");
    }

    myReader.readAsText(file);         //VERY IMPORTANT

    //myReader.readAsArrayBuffer(file);
    //console.log(myReader.result); //NULL
    
  }




  //REQUIERE    npm install timers ?

 
  parseXML(data) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) {  

       // console.log(result);

       // var ob = result.Session.Action[0];
      //  console.log(ob);


        var obj = result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[0].Curve[0].TTonePoint;  //.Public.TToneTHRAudiogram;//TToneTHRAudiogram;   //Employee;  

        console.log(obj);

       

       // for (k in obj ){//.TTonePoint) {  
            //var item = obj[k].$.Intensity1;//.Freq1
            //console.log(item);//.Freq1); //k.Freq1[0]);
            
          
          arr.push({  

          
        
         i500: obj[0].$.Intensity1/10,
      i1000: obj[1].$.Intensity1/10,
      i2000:obj[2].$.Intensity1/10,
       i3000: obj[3].$.Intensity1/10,
       i4000: obj[4].$.Intensity1/10,   
       i6000: obj[5].$.Intensity1/10,
       i8000: obj[6].$.Intensity1/10
          });  

          var obj = result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[1].Curve[0].TTonePoint;  

            
            arr.push({  
  
            
            
         d500:  obj[0].$.Intensity1/10,
         d1000: obj[1].$.Intensity1/10,
         d2000:obj[2].$.Intensity1/10,
          d3000: obj[3].$.Intensity1/10,
          d4000: obj[4].$.Intensity1/10,   
          d6000: obj[5].$.Intensity1/10,
          d8000: obj[6].$.Intensity1/10
            });  
  
              if(result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[2])
              {
                  console.log("BONe conduct exist L")

            var obj = result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[2].Curve[0].TTonePoint;  //.Public.TToneTHRAudiogram;//TToneTHRAudiogram;   //Employee;  

            console.log(obj);
    
          
              arr.push({  
    
              
            
             bi500:  obj[0].$.Intensity1/10,
          bi1000: obj[1].$.Intensity1/10,
          bi2000:obj[2].$.Intensity1/10,
           bi3000: obj[3].$.Intensity1/10,
           bi4000: obj[4].$.Intensity1/10,   
           bi6000: obj[5].$.Intensity1/10,
           bi8000: obj[6].$.Intensity1/10
              });  
            }

            if(result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[3])
            {
                console.log("BONe conduct exist R")

              var obj = result.Session.Action[0].Public[0].TAudioSession[0].ToneTHRAudiogram[0].TToneTHRAudiogram[3].Curve[0].TTonePoint;  
              console.log(obj);
                
                arr.push({  
      
                
                
             bd500:  obj[0].$.Intensity1/10,
             bd1000: obj[1].$.Intensity1/10,
             bd2000:obj[2].$.Intensity1/10,
              bd3000: obj[3].$.Intensity1/10,
              bd4000: obj[4].$.Intensity1/10,   
              bd6000: obj[5].$.Intensity1/10,
              bd8000: obj[6].$.Intensity1/10
                });  
            }



        resolve(arr);  

      
      });  

      //var arre = arr[0];
      //console.log(arre);
      this.updateformxml(arr);

    });  
  }  

  updateformxml(json) //porno decir xml mas bien
 {
     //console.log("updatexml ! 1 ! ! ! ! 1 !");


     if(json[2]){


     

      this.aForm.patchValue({
       
     //fecha:json.fecha,
     
     i250:json[0].i250,
     i500:json[0].i500,
     i1000:json[0].i1000,
     i2000:json[0].i2000,
     i3000:json[0].i3000,
     i4000:json[0].i4000,     
     i6000:json[0].i6000,
     i8000:json[0].i8000,
        
     d250:json[1].d250,
     d500:json[1].d500,
     d1000:json[1].d1000,
     d2000:json[1].d2000,
     d3000:json[1].d3000,
     d4000:json[1].d4000,
     d6000:json[1].d6000,
     d8000:json[1].d8000,

     
     bi250:json[2].bi250,
     bi500:json[2].bi500,
     bi1000:json[2].bi1000,
     bi2000:json[2].bi2000,
     bi3000:json[2].bi3000,
     bi4000:json[2].bi4000,     
     bi6000:json[2].bi6000,
     bi8000:json[2].bi8000,

     bd250:json[3].bd250,
     bd500:json[3].bd500,
     bd1000:json[3].bd1000,
     bd2000:json[3].bd2000,
     bd3000:json[3].bd3000,
     bd4000:json[3].bd4000,
     bd6000:json[3].bd6000,
     bd8000:json[3].bd8000
      
      });
}else{

  console.log("no bone");

  this.aForm.patchValue({
       
    //fecha:json.fecha,
    
    i250:json[0].i250,
    i500:json[0].i500,
    i1000:json[0].i1000,
    i2000:json[0].i2000,
    i3000:json[0].i3000,
    i4000:json[0].i4000,     
    i6000:json[0].i6000,
    i8000:json[0].i8000,
       
    d250:json[1].d250,
    d500:json[1].d500,
    d1000:json[1].d1000,
    d2000:json[1].d2000,
    d3000:json[1].d3000,
    d4000:json[1].d4000,
    d6000:json[1].d6000,
    d8000:json[1].d8000,

    
    
     
});






}


 
 console.log("after updateformxml....");
  }


  treatinsensity(intensity)
  {
    var db=0;

    if(intensity == 0)
    db=0;
    else 
    db = intensity /10;
    

    return db;
  }

}
