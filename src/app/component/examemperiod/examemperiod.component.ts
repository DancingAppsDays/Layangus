import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Constantes } from 'src/app/constantes';
import { SignaturePadComponent } from '../signature-pad/signature-pad.component';


@Component({
  selector: 'app-examemperiod',
  templateUrl: './examemperiod.component.html',
  styleUrls: ['./examemperiod.component.css']
})
export class ExamemperiodComponent implements OnInit {

  loading = false;
  success = false;
  today = Date.now();
  exform: FormGroup; 
  exs: any;
  sucessdata: any;
 hidecanvasp = false;
 query:any;    //all params
 querid:any;
     queridempleado: any;
     editar: boolean;


  constructor(private fb:FormBuilder, private http:HttpClient, private router2:ActivatedRoute, private router:Router) { }

  emmit($event){
     //console.log($event);
     var signdiv = (<HTMLInputElement>document.getElementById("firma")).value = localStorage.getItem("signaturetemp");
   
     
     this.exform.patchValue({
          firma: signdiv});

 }

 emmit2($event){
     console.log($event);
    // var signdiv = (<HTMLInputElement>document.getElementById("firma")).value = localStorage.getItem("signaturetemp");
   
     
     this.exform.patchValue({
          firma:"unsigend"});
          
          //console.log("RE erased");
 }
 //@Input() hidecanvas: "true";
 //@ViewChild('signar')singar//, { static: false }) singar          //angular 8 ondward...
/*
 addevent(){
 //    this.childEvent.emit();
 }


 
    //private childcomp: SignaturePadComponent;

    increase() {
         console.log("increase func test");
       this.singar.setsigned();         //UNRECOGNIZEDDD....
    }*/

    @ViewChild("signaler", {static: true}) child:SignaturePadComponent;         //IT WORKSSSSS


changechild()  //after getdata is called....
{
     //console.log("child func test");
     this.hidecanvasp = true;
     this.child.showImage(); //is TODO IMAGETR CON PATCH VALUIE
}

  ngOnInit(): void {

    
     this.router2.queryParams.subscribe(async (params:Params)=>{
          //console.log(params);
          //console.log(params.id + "id of params...");       //ERROR PRONE? //nah its undefined....
          this.querid=params.id;
          this.queridempleado= params.idempleado;
          this.query = params;
      });
     
    
     

     

    this.exform = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern('[^",]*$')
      ]],
      idempleado: ['', [
        Validators.required,
             ]],
      imss: ['', [
        //Validators.required,
             ]],
     sangre: ['', [
        //Validators.required,
             ]],
      edad: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$')
      ]],
      estadocivil: ['', [
        Validators.required,
             ]],
      sexo: ['', [
              Validators.required,
                   ]],
      fechan: ['', [
          Validators.required,
               ]],
      domicilio: ['', [
                Validators.required,
                     ]],
      telefon: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(10),
      ]],
      pac_estado: ['', [
        Validators.required,
             ]],
      lugarnac: ['', [
        Validators.required,
             ]],
      cp: ['', [
              Validators.required,
                   ]],
      celfon: ['', [
          Validators.required,
               ]],
      escolaridad: ['', [
                Validators.required,
                     ]],  
      contactoeme: ['', [
              Validators.required,
                   ]],
      domicilioeme: ['', [
          Validators.required,
               ]],
     telefoneme: ['', [
                Validators.required,
                     ]],







      fechaingreso: ['', [
                Validators.required,
                     ]],
      area: ['', [
                Validators.required,
                     ]],
      cc: ['', [
                Validators.required,
                     ]],                                        
      numnomina: ['', [
        Validators.required,
             ]],
      puestoac: ['', [
              Validators.required,
                   ]],
      tiempopues: ['', [
          Validators.required,
               ]],
      puestoacdesc: ['', [
                Validators.required,
                     ]],  

                     
      ruidobox: [false, [
              Validators.required,
                   ]],
      vibracionbox: [false, [
        Validators.required,
             ]],
      temperaturabox: [false, [
              Validators.required,
                   ]],
      polvobox: [false, [
          Validators.required,

               ]],
      humobox: [false, [
                Validators.required,
                     ]],  
      vaporbox: [false, [
              Validators.required,
                   ]],
      polvod: ['', [
          //Validators.required,
               ]],
      humod: ['', [
               // Validators.required,
                     ]],  
      vapord: ['', [
              //Validators.required,
                   ]],
     quimbox: ['', [
               // Validators.required,
                     ]],  
      biolobox: ['', [
              //Validators.required,
                   ]],
      quimd: ['', [
               // Validators.required,
                     ]],  
      biolod: ['', [
              //Validators.required,
                   ]],


       ergopuesto: ['', [
          //Validators.required,
               ]],
      tamapuesto: ['', [
               // Validators.required,
                     ]],  
     troncodebajo: ['', [
              //Validators.required,
                   ]],
     tronconivel: ['', [
               // Validators.required,
                     ]],  
     troncoencima: ['', [
              //Validators.required,
                   ]],
      movrepetivo: ['', [
               // Validators.required,
                     ]],  
      movrepetivod: ['', [
              //Validators.required,
                   ]],
      manejodecarga: ['', [
          //Validators.required,
               ]],
     manejodecargad: ['', [
               // Validators.required,
                     ]],  



      zapa: ['', [
              //Validators.required,
                   ]],
     mandi: ['', [
               // Validators.required,
                     ]],  
      casc: ['', [
              //Validators.required,
                   ]],
     tyve: ['', [
               // Validators.required,
                     ]],  
      lente: ['', [
              //Validators.required,
                   ]],
       manga: ['', [
          //Validators.required,
               ]],
      care: ['', [
               // Validators.required,
                     ]],  
     masc: ['', [
              //Validators.required,
                   ]],
     tapo: ['', [
               // Validators.required,
                     ]],  
     guan: ['', [
              //Validators.required,
                   ]],
      faja: ['', [
               // Validators.required,
                     ]],  
      fajaotros: ['', [
              //Validators.required,
                   ]],
      fajaotrosd: ['', [
              //Validators.required,
                   ]],

    
       puestoanterior: ['', [
          //Validators.required,
               ]],
      areaanterior: ['', [
               // Validators.required,
                     ]],  
     duracionanterior: ['', [
              //Validators.required,
                   ]],
    accianterior: ['', [
               // Validators.required,
                     ]],  
     ruidoanterior: ['', [
              //Validators.required,
                   ]],
      tempanterior: ['', [
               // Validators.required,
                     ]],  
      vibraanterior: ['', [
              //Validators.required,
                   ]],
      posturaanterior: ['', [
          //Validators.required,
               ]],
     sentadoanterior: ['', [
               // Validators.required,
                     ]],  



     malailuminaanterior: ['', [
              //Validators.required,
                   ]],
     polvoanterior: ['', [
               // Validators.required,
                     ]],  
       polvoanteriord: ['', [
              //Validators.required,
                   ]],
     vaporanterior: ['', [
               // Validators.required,
                     ]],  
      vaporanteriord: ['', [
              //Validators.required,
                   ]],
      radiacionanterior: ['', [
          //Validators.required,
               ]],
      radiacionanteriord: ['', [
               // Validators.required,
                     ]],  
     manejodecargaanterior: ['', [
              //Validators.required,
                   ]],
                   manejodecargaanteriord: ['', [
               // Validators.required,
                     ]],  
     movrepetivoanterior: ['', [
              //Validators.required,
                   ]],
      movrepetivoanteriord: ['', [
               // Validators.required,
                     ]],  


      accis: ['', [
              //Validators.required,
                   ]],
      accisd: ['', [
              //Validators.required,
                   ]],
      enfermas: ['', [
          //Validators.required,
               ]],
     enfermasd: ['', [
               // Validators.required,
                     ]],  




     diabetes: ['', [
              //Validators.required,
                   ]],
     diabetesd: ['', [
               // Validators.required,
                     ]],  
     hipert: ['', [
              //Validators.required,
                   ]],
      hipertd: ['', [
               // Validators.required,
                     ]],  
      bajapres: ['', [
              //Validators.required,
                   ]],
      bajapresd: ['', [
          //Validators.required,
               ]],
     cardiac: ['', [
               // Validators.required,
                     ]], 
      cardiacd: ['', [
              //Validators.required,
                   ]],
     pulmonares: ['', [
               // Validators.required,
                     ]],  
       pulmonaresd: ['', [
              //Validators.required,
                   ]],
     renales: ['', [
               // Validators.required,
                     ]],  
      renalesd: ['', [
              //Validators.required,
                   ]],
       hepati: ['', [
          //Validators.required,
               ]],
      hepatisd: ['', [
               // Validators.required,
                     ]],  
     enfermasangre: ['', [
              //Validators.required,
                   ]],
     enfermasangred: ['', [
               // Validators.required,
                     ]],  
     depresion: ['', [
              //Validators.required,
                   ]],
      depresiond: ['', [
               // Validators.required,
                     ]],  
      epileps: ['', [
              //Validators.required,
                   ]],
      epilepsd: ['', [
              //Validators.required,
                   ]],
      cancer: ['', [
          //Validators.required,
               ]],
      cancerd: ['', [
               // Validators.required,
                     ]],  
     embolia: ['', [
              //Validators.required,
                   ]],
    emboliad: ['', [
               // Validators.required,
                     ]],  
     tiroides: ['', [
              //Validators.required,
                   ]],
     tiroidesd: ['', [
               // Validators.required,
                     ]],  
      obesidad: ['', [
              //Validators.required,
                   ]],
      obesidadd: ['', [
          //Validators.required,
               ]],
     visuales: ['', [
               // Validators.required,
                     ]], 
     visualesd: ['', [
              //Validators.required,
                   ]],
     alergias: ['', [
               // Validators.required,
                     ]],  
       alergiasd: ['', [
              //Validators.required,
                   ]],
     congenit: ['', [
               // Validators.required,
                     ]],  
      congenitd: ['', [
              //Validators.required,
                   ]],
     huesos: ['', [
          //Validators.required,
               ]],
      huesosd: ['', [
               // Validators.required,
                     ]], 
                     
                     


    casatipo: ['', [
              //Validators.required,
                   ]],
     casaservice: ['', [
               // Validators.required,
                     ]],  
     casanumero: ['', [
              //Validators.required,
                   ]],
      casachavos: ['', [
               // Validators.required,
                     ]],  
     casarucos: ['', [
              //Validators.required,
                   ]],
      casaenfermo: ['', [
              //Validators.required,
                   ]],
      casaenfermod: ['', [
              //Validators.required,
                   ]],

      mascotas: ['', [
              //Validators.required,
                   ]],
      mascotasd: ['', [
              //Validators.required,
                   ]],
      fumas: ['', [
          //Validators.required,
               ]],
     fumad: ['', [
               // Validators.required,
                     ]],  
     tomas: ['', [
              //Validators.required,
                   ]],
     tomad: ['', [
               // Validators.required,
                     ]],  
     drogas: ['', [
              //Validators.required,
                   ]],
      drogad: ['', [
               // Validators.required,
                     ]],  
      ejercicios: ['', [
              //Validators.required,
                   ]],
      ejerciciosd: ['', [
          //Validators.required,
               ]],
     comidasdia: ['', [
               // Validators.required,
                     ]], 
      litrosdia: ['', [
              //Validators.required,
                   ]],


     Verduras: ['', [
               // Validators.required,
                     ]],  
       Frutas: ['', [
              //Validators.required,
                   ]],
     Pastas: ['', [
               // Validators.required,
                     ]],  
      Carneroja: ['', [
              //Validators.required,
                   ]],
       Carneblanca: ['', [
          //Validators.required,
               ]],
      Embutidos: ['', [
               // Validators.required,
                     ]],  
     Lacteos: ['', [
              //Validators.required,
                   ]],
       Leguminosas: ['', [
              //Validators.required,
                   ]],
     Cereales: ['', [
               // Validators.required,
                     ]],  
    Chatarra: ['', [
              //Validators.required,
                   ]],


     semabaño: ['', [
               // Validators.required,
                     ]],  
      semachones: ['', [
              //Validators.required,
                   ]],
      semadientes: ['', [
              //Validators.required,
                   ]],


                   
      esquemavacun: ['', [
          //Validators.required,
               ]],
      Influenza: ['', [
               // Validators.required,
                     ]],  
     Tetanos: ['', [
              //Validators.required,
                   ]],
    Hepatitisv: ['', [
               // Validators.required,
                     ]],  
     transfusion: ['', [
              //Validators.required,
                   ]],






     Varicela: ['', [
               // Validators.required,
                     ]],  
      Paperas: ['', [
              //Validators.required,
                   ]],
      Tuberculosis: ['', [
          //Validators.required,
               ]],
     Rubeola: ['', [
               // Validators.required,
                     ]], 
     Hepatitis: ['', [
              //Validators.required,
                   ]],
     Oidostapados: ['', [
               // Validators.required,
                     ]],  
      Doloroidos: ['', [
              //Validators.required,
                   ]],
     Dificultadescuchar: ['', [
               // Validators.required,
                     ]],  
      Obstrucnariz: ['', [
              //Validators.required,
                   ]],
     secrenariz: ['', [
          //Validators.required,
               ]],
     sangranariz: ['', [
               // Validators.required,
                     ]], 
    estornudos: ['', [
              //Validators.required,
                   ]],
     tosfrec: ['', [
               // Validators.required,
                     ]],  
     flemasan: ['', [
              //Validators.required,
                   ]],
      Dificultadrespirar: ['', [
               // Validators.required,
                     ]],  
     silbidos: ['', [
              //Validators.required,
                   ]],


    cansan: ['', [
              //Validators.required,
                   ]],
    cansanescalar: ['', [
               // Validators.required,
                     ]],  
     opresiopecho: ['', [
              //Validators.required,
                   ]],
      palpita: ['', [
               // Validators.required,
                     ]],  
     presionalta: ['', [
              //Validators.required,
                   ]],
     mareo: ['', [
              //Validators.required,
                   ]],
      varices: ['', [
              //Validators.required,
                   ]],

     vomito: ['', [
              //Validators.required,
                   ]],
      agruras: ['', [
              //Validators.required,
                   ]],
      evacsangre: ['', [
          //Validators.required,
               ]],
     aumentopeso: ['', [
               // Validators.required,
                     ]],  
     cirujias: ['', [
              //Validators.required,
                   ]],



     azucaralta: ['', [
               // Validators.required,
                     ]],  
     vesicula: ['', [
              //Validators.required,
                   ]],
      fracturas: ['', [
               // Validators.required,
                     ]],  
      artritis: ['', [
              //Validators.required,
                   ]],
      tendonitis: ['', [
          //Validators.required,
               ]],
    dolorespalda: ['', [
               // Validators.required,
                     ]], 
     ardororina: ['', [
              //Validators.required,
                   ]],
    miccionnoche: ['', [
               // Validators.required,
                     ]],  
       calculos: ['', [
              //Validators.required,
                   ]],
     difiorinar: ['', [
               // Validators.required,
                     ]],  
     sangreorina: ['', [
              //Validators.required,
                   ]],
      dolorsexo: ['', [
          //Validators.required,
               ]],
      secrepene: ['', [
               // Validators.required,
                     ]],  
     ets: ['', [
              //Validators.required,
                   ]],
     riskysex: ['', [
               // Validators.required,
                     ]],  
    dolorcabeza: ['', [
              //Validators.required,
                   ]],
     paralisis: ['', [
               // Validators.required,
                     ]],  
     convulsiones: ['', [
              //Validators.required,
                   ]],
     adormeciextremi: ['', [
              //Validators.required,
                   ]],              
      comezonpiel: ['', [
          //Validators.required,
               ]],
      alergiamedicina: ['', [
               // Validators.required,
                     ]],  
     ardorojos: ['', [
              //Validators.required,
                   ]],
   hongounas: ['', [
               // Validators.required,
                     ]],  
     miope: ['', [
              //Validators.required,
                   ]],
     perfos: ['', [
               // Validators.required,
                     ]],  
      transfus: ['', [
              //Validators.required,
                   ]],
      enftiroides: ['', [
          //Validators.required,
               ]],


     ginmenarc: ['', [
               // Validators.required,
                     ]], 
     iniciosex: ['', [
              //Validators.required,
                   ]],
     numparejas: ['', [
               // Validators.required,
                     ]],  
      metodosp: ['', [
              //Validators.required,
                   ]],
    gestas: ['', [
               // Validators.required,
                     ]],  
     partos: ['', [
              //Validators.required,
                   ]],
    cesars: ['', [
          //Validators.required,
               ]],
     aborts: ['', [
               // Validators.required,
                     ]], 
    ultimoparto: ['', [
              //Validators.required,
                   ]],
     ultimamam: ['', [
               // Validators.required,
                     ]],  
     ultimamast: ['', [
              //Validators.required,
                   ]],
      ultimamastd: ['', [
               // Validators.required,
                     ]],  


      
     pesosignos: ['', [
               // Validators.required,
                     ]],  
     tallasignos: ['', [
              //Validators.required,
                   ]],
     imcsignos: ['', [
               // Validators.required,
                     ]],  
      dxtxsignos: ['', [
              //Validators.required,
                   ]],
      taisignos: ['', [
          //Validators.required,
               ]],
    tadsignos: ['', [
               // Validators.required,
                     ]], 
     fcsignos: ['', [
              //Validators.required,
                   ]],
    frsignos: ['', [
               // Validators.required,
                     ]],  
       tempsignos: ['', [
              //Validators.required,
                   ]],



     agusignos: ['', [
               // Validators.required,
                     ]],  
     binocusignos: ['', [
              //Validators.required,
                   ]],
      ccsignos: ['', [
          //Validators.required,
               ]],
      sinodsignos: ['', [
               // Validators.required,
                     ]],  
     conodsignos: ['', [
              //Validators.required,
                   ]],
    agucercasignos: ['', [
               // Validators.required,
                     ]],  
   campisignos: ['', [
              //Validators.required,
                   ]],
     daltosignos: ['', [
               // Validators.required,
                     ]],  
     habisignos: ['', [
              //Validators.required,
                   ]],





     excabeza: ['', [
              //Validators.required,
                   ]],              
      excraneo: ['', [
          //Validators.required,
               ]],
      excara: ['', [
               // Validators.required,
                     ]],  
     expupi: ['', [
              //Validators.required,
                   ]],
   exconjun: ['', [
               // Validators.required,
                     ]],  
     exnariz: ['', [
              //Validators.required,
                   ]],
    exboca: ['', [
               // Validators.required,
                     ]],  
      excavi: ['', [
              //Validators.required,
                   ]],
      examigda: ['', [
          //Validators.required,
               ]],
     exfarin: ['', [
               // Validators.required,
                     ]], 
     exesdental: ['', [
              //Validators.required,
                   ]],
    exoi: ['', [
               // Validators.required,
                     ]],  
      exoip: ['', [
              //Validators.required,
                   ]],
    exoic: ['', [
               // Validators.required,
                     ]],  
     exoit: ['', [
              //Validators.required,
                   ]],
    exoia: ['', [
          //Validators.required,
               ]],
    exod: ['', [
               // Validators.required,
                     ]], 
    exodp: ['', [
              //Validators.required,
                   ]],
     exodc: ['', [
               // Validators.required,
                     ]],  
     exodt: ['', [
              //Validators.required,
                   ]],
     exoda: ['', [
               // Validators.required,
                     ]], 
                     
      excuello: ['', [
              //Validators.required,
                   ]],
      extorax: ['', [
          //Validators.required,
               ]],
     exmovresp: ['', [
               // Validators.required,
                     ]], 
     exruidocardia: ['', [
              //Validators.required,
                   ]],
    excampospulmo: ['', [
               // Validators.required,
                     ]],  
      exmamas: ['', [
              //Validators.required,
                   ]],
    exabdomen: ['', [
               // Validators.required,
                     ]],  
     exausculta: ['', [
              //Validators.required,
                   ]],
    expalpa: ['', [
          //Validators.required,
               ]],
    exviscero: ['', [
               // Validators.required,
                     ]], 
    exhernias: ['', [
              //Validators.required,
                   ]],
     extumor: ['', [
               // Validators.required,
                     ]],  
     exobserva: ['', [
              //Validators.required,
                   ]],
     exgenit: ['', [
               // Validators.required,
                     ]],
     exurin: ['', [
          //Validators.required,
               ]],
    excolumn: ['', [
               // Validators.required,
                     ]], 
    exexsup: ['', [
              //Validators.required,
                   ]],
     exexinf: ['', [
               // Validators.required,
                     ]],  
     expiel: ['', [
              //Validators.required,
                   ]],
     exnerv: ['', [
               // Validators.required,
                     ]],

      diagnos: ['', [
          //Validators.required,
               ]],
    observa: ['', [
               // Validators.required,
                     ]], 
    recomenda: ['', [
              //Validators.required,
                   ]],
     apto: ['', [
               // Validators.required,
                     ]],      
 firma: ['notsigned', [
                         // Validators.required,
        ]],  

        
    });   // end formbuilder
    
    

    if(this.querid != undefined)// = undefined  != "undefined")  //editar no guardar neuvo
    {
     //cambiarbotonsave();
     this.editar = true; //declara que el submit editara no creara nuevo registro
     this.getfromdata(this.querid);

    }else{                                        //else new examen con idempleado readonyl
     console.log(this.queridempleado);
    
     this.exform.controls['idempleado'].setValue(this.queridempleado);//.disable(); //disable mess with ability of formcontrol to give data
   
     //document.getElementById('idtemp').style.display = "none";
     //(<HTMLInputElement>document.getElementById('idemplea')).readOnly = true;//.value;
    
    }
    document.getElementById('idtemp').style.display = "none";

}//end of ONinit


getcurry()     //UNUSED
{
  return JSON.stringify(this.fb); //exform.fb?

}

getfromdata(id)//id: int)       //TODO GET INT BY QUERY
{
  this.http.get(Constantes.capiURL+"Examenme/"+id).subscribe(data => {

    this.sucessdata = data;
    if(this.sucessdata['status'] == "success"){
      this.exs = this.sucessdata['data'];
      console.log(this.exs);
    window.alert(this.sucessdata['mensaje']);

                                          //nice try but needs model also
    //this.exform.get('nombre').setValue("exs.nombre");   //formgroup solution instead of ngmodel

      //Alex alvear solution
      this.exform.patchValue({
        nombre: this.query.nombre,//  this.exs.nombre,
        idempleado: this.exs.idempleado,
        imss: this.exs.imss,
        sangre: this.exs.sangre,
        edad: this.exs.edad,
        estadocivil: this.exs.estadocivil,
        sexo: this.exs.sexo,
        fechan: this.exs.fechan,
        domicilio: this.exs.domicilio,
        telefon: this.exs.telefon,
        celfon: this.exs.celfon,
        escolaridad: this.exs.escolaridad,
        contactoeme: this.exs.contactoeme,
        domiclioeme: this.exs.domicilioeme,
        telefoneme: this.exs.telefoneme,
        
        cp: this.exs.cp,
        lugarnac: this.exs.lugarnac,




      fechaingreso:this.exs.fechaingreso,
area:this.exs.area,
cc:this.exs.cc,                                        
numnomina:this.exs.numnomina,
puestoac:this.exs.puestoac,
tiempopues:this.exs.tiempopues,
puestoacdesc: this.exs.puestoacdesc,  

               
ruidobox:this.exs.ruidobox,
vibracionbox:this.exs.vibracionbox,
temperaturabox:this.exs.temperaturabox,
polvobox:this.exs.polvobox,
humobox: this.exs.humobox,  
vaporbox:this.exs.vaporbox,
polvod: this.exs.polvod,
humod:this.exs.humod,  
vapord: this.exs.vapord,
quimbox:this.exs.quimbox,  
biolobox:this.exs.biolobox,
quimd:this.exs.quimd,  
biolod: this.exs.biolod,


 ergopuesto:this.exs.ergopuesto,
tamapuesto:this.exs.tamapuesto,  
troncodebajo: this.exs.troncodebajo,
tronconivel:this.exs.tronconivel,  
troncoencima:this.exs.troncoencima,
movrepetivo:this.exs.movrepetivo,  
movrepetivod: this.exs.movrepetivod,
manejodecarga:this.exs.manejodecarga,
manejodecargad:this.exs.manejodecargad,  



zapa: this.exs.zapa,
mandi: this.exs.mandi,  
casc: this.exs.casc,
tyve: this.exs.tyve,  
lente: this.exs.lente,
 manga:this.exs.manga,
care: this.exs.care,  
masc:this.exs.masc,
tapo: this.exs.tapo,  
guan: this.exs.guan,
faja: this.exs.faja,  
fajaotros: this.exs.fajaotros,
fajaotrosd: this.exs.fajaotrosd,


 puestoanterior: this.exs.puestoanterior,
areaanterior:this.exs.areaanterior,  
duracionanterior:this.exs.duracionanterior,
accianterior:this.exs.accianterior,  
ruidoanterior:this.exs.ruidoanterior,
tempanterior: this.exs.tempanterior,  
vibraanterior:this.exs.vibraanterior,
posturaanterior:this.exs.posturaanterior,
sentadoanterior: this.exs.sentadoanterior,  



malailuminaanterior:this.exs.malailuminaanterior,
polvoanterior: this.exs.polvoanterior,  
 polvoanteriord:this.exs.polvoanteriord,
vaporanterior: this.exs.vaporanterior,  
vaporanteriord: this.exs.vaporanteriord,
radiacionanterior:this.exs.radiacionanterior,
radiacionanteriord: this.exs.radiacionanteriord,
manejodecargaanterior: this.exs.manejodecargaanterior,
             manejodecargaanteriord: this.exs.manejodecargaanteriord,  
movrepetivoanterior: this.exs.movrepetivoanterior,
movrepetivoanteriord: this.exs.movrepetivoanteriord,  


accis:this.exs.accis,
accisd:this.exs.accisd,
enfermas:this.exs.enfermas,
enfermasd:this.exs.enfermasd,  




diabetes:this.exs.diabetes,
diabetesd: this.exs.diabetesd,  
hipert:this.exs.hipert,
hipertd:this.exs.hipertd,  
bajapres:this.exs.bajapres,
bajapresd: this.exs.bajapresd,
cardiac: this.exs.cardiac, 
cardiacd:this.exs.cardiacd,
pulmonares: this.exs.pulmonares,  
 pulmonaresd: this.exs.pulmonaresd,
renales: this.exs.renales,  
renalesd: this.exs.renalesd,
hepati:this.exs.hepati,
hepatisd: this.exs.hepatisd,  
enfermasangre: this.exs.enfermasangre,
enfermasangred:this.exs.enfermasangred,  
depresion: this.exs.depresion,
depresiond:this.exs.depresiond,  
epileps:this.exs.epileps,
epilepsd:this.exs.epilepsd,
cancer: this.exs.cancer,
cancerd: this.exs.cancerd,  
embolia: this.exs.embolia,
emboliad: this.exs.emboliad,  
tiroides: this.exs.tiroides,
tiroidesd:this.exs.tiroidesd,  
obesidad:this.exs.obesidad,
obesidadd: this.exs.obesidadd,
visuales:this.exs.visuales, 
visualesd: this.exs.visualesd,
alergias: this.exs.alergias,  
 alergiasd: this.exs.alergiasd,
congenit: this.exs.congenit,  
congenitd: this.exs.congenitd,
huesos:this.exs.huesos,
huesosd: this.exs.huesosd, 
               
               


casatipo:this.exs.casatipo,
casaservice: this.exs.casaservice,  
casanumero: this.exs.casanumero,
casachavos: this.exs.casachavos,  
casarucos: this.exs.casarucos,
casaenfermo: this.exs.casaenfermo,
casaenfermod:this.exs.casaenfermod,

mascotas:this.exs.mascotas,
mascotasd:this.exs.mascotasd,
fumas:this.exs.fumas,
fumad:this.exs.fumad,  
tomas: this.exs.tomas,
tomad: this.exs.tomad,  
drogas:this.exs.drogas,
drogad:this.exs.drogad,  
ejercicios: this.exs.ejercicios,
ejerciciosd: this.exs.ejerciciosd,
comidasdia: this.exs.comidasdia, 
litrosdia:this.exs.litrosdia,


Verduras:this.exs.Verduras,  
 Frutas:this.exs.Frutas,
Pastas: this.exs.Pastas,  
Carneroja:this.exs.Carneroja,
 Carneblanca: this.exs.Carneblanca,
Embutidos: this.exs.Embutidos,  
Lacteos:this.exs.Lacteos,
 Leguminosas: this.exs.Leguminosas,
Cereales:this.exs.Cereales,  
Chatarra:this.exs.Chatarra,


semabaño:this.exs.semabaño,  
semachones:this.exs.semachones,
semadientes:this.exs.semadientes,


             
esquemavacun: this.exs.esquemavacun,
Influenza: this.exs.Influenza,  
Tetanos: this.exs.Tetanos,
Hepatitisv:this.exs.Hepatitisv,  
transfusion: this.exs.transfusion,






Varicela:this.exs.Varicela,  
Paperas:this.exs.Paperas,
Tuberculosis: this.exs.Tuberculosis,
Rubeola:this.exs.Rubeola, 
Hepatitis:this.exs.Hepatitis,
Oidostapados: this.exs.Oidostapados,  
Doloroidos:this.exs.Doloroidos,
Dificultadescuchar:this.exs.Dificultadescuchar,  
Obstrucnariz:this.exs.Obstrucnariz,
secrenariz:this.exs.secrenariz,
sangranariz:this.exs.sangranariz, 
estornudos: this.exs.estornudos,
tosfrec:this.exs.tosfrec,  
flemasan: this.exs.flemasan,
Dificultadrespirar:this.exs.Dificultadrespirar,  
silbidos:this.exs.silbidos,


cansan: this.exs.cansan,
cansanescalar:this.exs.cansanescalar,  
opresiopecho: this.exs.opresiopecho,
palpita:this.exs.palpita,  
presionalta: this.exs.presionalta,
mareo:this.exs.mareo,
varices:this.exs.varices,

vomito:this.exs.vomito,
agruras: this.exs.agruras,
evacsangre:this.exs.evacsangre,
aumentopeso:this.exs.aumentopeso,  
cirujias:this.exs.cirujias,



azucaralta: this.exs.azucaralta,  
vesicula:this.exs.vesicula,
fracturas:this.exs.fracturas,  
artritis:this.exs.artritis,
tendonitis:this.exs.tendonitis,
dolorespalda:this.exs.dolorespalda, 
ardororina: this.exs.ardororina,
miccionnoche:this.exs.miccionnoche,  
calculos:this.exs.calculos,
difiorinar:this.exs.difiorinar,  
sangreorina: this.exs.sangreorina,
dolorsexo:this.exs.dolorsexo,
secrepene:this.exs.secrepene,  
ets:this.exs.ets,
riskysex:this.exs.riskysex,  
dolorcabeza:this.exs.dolorcabeza,
paralisis:this.exs.paralisis,  
convulsiones:this.exs.convulsiones,
adormeciextremi:this.exs.adormeciextremi,              
comezonpiel:this.exs.comezonpiel,
alergiamedicina:this.exs.alergiamedicina,  
ardorojos:this.exs.ardorojos,
hongounas:this.exs.hongounas,  
miope:this.exs.miope,
perfos:this.exs.perfos,  
transfus:this.exs.transfus,
enftiroides:this.exs.enftiroides,


ginmenarc:this.exs.ginmenarc, 
iniciosex:this.exs.iniciosex,
numparejas:this.exs.numparejas,  
metodosp:this.exs.metodosp,
gestas: this.exs.gestas,  
partos:this.exs.partos,
cesars:this.exs.cesars,
aborts:this.exs.aborts, 
ultimoparto:this.exs.ultimoparto,
ultimamam:this.exs.ultimamam,  
ultimamast:this.exs.ultimamast,
ultimamastd:this.exs.ultimamastd,  



pesosignos:this.exs.pesosignos,  
tallasignos:this.exs.tallasignos,
imcsignos:this.exs.imcsignos,  
dxtxsignos:this.exs.dxtxsignos,
taisignos:this.exs.taisignos,
tadsignos:this.exs.tadsignos, 
fcsignos:this.exs.fcsignos,
frsignos:this.exs.frsignos,  
 tempsignos:this.exs.tempsignos,



agusignos: this.exs.agusignos,  
binocusignos:this.exs.binocusignos,
ccsignos:this.exs.ccsignos,
sinodsignos:this.exs.sinodsignos,  
conodsignos:this.exs.conodsignos,
agucercasignos:this.exs.agucercasignos,  
campisignos:this.exs.campisignos,
daltosignos:this.exs.daltosignos,  
habisignos:this.exs.habisignos,





excabeza:this.exs.excabeza,              
excraneo:this.exs.excraneo,
excara:this.exs.excara,  
expupi:this.exs.expupi,
exconjun:this.exs.exconjun,  
exnariz:this.exs.exnariz,
exboca:this.exs.exboca,  
excavi:this.exs.excavi,
examigda:this.exs.examigda,
exfarin:this.exs.exfarin, 
exesdental:this.exs.exesdental,
exoi:this.exs.exoi,  
exoip:this.exs.exoip,
exoic: this.exs.exoic,  
exoit: this.exs.exoit,
exoia:this.exs.exoia,
exod:this.exs.exod, 
exodp:this.exs.exodp,
exodc:this.exs.exodc,  
exodt: this.exs.exodt,
exoda: this.exs.exoda, 
               
excuello: this.exs.excuello,
extorax:this.exs.extorax,
exmovresp: this.exs.exmovresp, 
exruidocardia: this.exs.exruidocardia,
excampospulmo: this.exs.excampospulmo,  
exmamas: this.exs.exmamas,
exabdomen:this.exs.exabdomen,  
exausculta: this.exs.exausculta,
expalpa:this.exs.expalpa,
exviscero:this.exs.exviscero, 
exhernias: this.exs.exhernias,
extumor: this.exs.extumor,  
exobserva: this.exs.exobserva,
exgenit:this.exs.exgenit,
exurin:this.exs.exurin,
excolumn: this.exs.excolumn, 
exexsup:this.exs.exexsup,
exexinf: this.exs.exexinf,  
expiel: this.exs.expiel,
exnerv:this.exs.exnerv,

diagnos: this.exs.diagnos,
observa: this.exs.observa, 
recomenda: this.exs.recomenda,
apto: this.exs.apto,      
firma:this.exs.firma,  


      //localStorage.setItem("signaturetemp",)    
    


      }
      );

      localStorage.setItem("signaturetemp", this.exs.firma);

      this.changechild();  //hiddes child signcanvas shows images....

    }else{
      window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
      //this.router.navigate(['/']);

    }


  });  
 

}
onsavelite(data)
{ //console.log("igndiv");
     
     var signdiv = (<HTMLInputElement>document.getElementById("firma")).value = localStorage.getItem("signaturetemp");
   
     
     this.exform.patchValue({
          firma: signdiv});

          //console.log(this.exform.get('firma').value);

         // this.onGuardarexpediente(data);
}

cambiarbotonsave()
{

     document.getElementById("botonguardar").style.visibility = "false";
document.getElementById("botoneditar").style.visibility = "false";


}


onGuardarexpediente(data)
{
     
     //var signdiv = (<HTMLInputElement>document.getElementById("firma")).value = localStorage.getItem("signaturetemp");     
     //this.exform.patchValue({          firma: signdiv}); // pATCH AFTER post...... WEIRD

     if(this.editar == true)
     {
          console.log("sendtoactualizar examen");
//console.log(data);
this.http.post(Constantes.capiURL+"Examenme/"+this.querid,data).subscribe(data => {

  this.sucessdata = data;
  if(this.sucessdata['status'] == "success"){

  //this.eqs = this.sucessdata['data'];
  window.alert(this.sucessdata['mensaje']);
    this.router.navigate(['/']);

  }else{
    window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
    //this.router.navigate(['/']);

  }
});  



          // return  //USEFUL
     }else{

     console.log("sendtoguardarsu examen");
//console.log(data);
this.http.post(Constantes.capiURL+"Examenme",data).subscribe(data => {

  this.sucessdata = data;
      if(this.sucessdata['status'] == "success"){

  //this.eqs = this.sucessdata['data'];
  window.alert(this.sucessdata['mensaje']);
  //this.exform.reset(); ID NULL now....
  this.router.navigate(['/']);
      }else{
    window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
    //this.router.navigate(['/']);

      }
  
     });  
     }


//console.log("post postsendtoguardarsu usuario");
}
  



 
   
  
  
     
 
}
