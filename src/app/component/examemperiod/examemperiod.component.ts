import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/app/constantes';


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

  


  constructor(private fb:FormBuilder, private http:HttpClient) { }

  

  ngOnInit(): void {

     

    this.exform = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
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
    


                   





      
    });
    
    this.getfromdata();

}//end of ONinit


getcurry()
{
  return JSON.stringify(this.fb); //exform.fb?

}

getfromdata()//id: int)
{
  this.http.get(Constantes.capiURL+"Expediente/1").subscribe(data => {

    this.sucessdata = data;
    if(this.sucessdata['status'] == "success"){
      this.exs = this.sucessdata['data'];
      console.log(this.exs);
    window.alert(this.sucessdata['mensaje']);

                                          //nice try but needs model also
    //this.exform.get('nombre').setValue("exs.nombre");   //formgroup solution instead of ngmodel

      //Alex alvear solution
      this.exform.patchValue({
        nombre: this.exs.nombre,
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
        tratamientos1: this.exs.tratamientos1,
        tratamientos2: this.exs.tratamientos2,
        padecimientos1: this.exs.padecimientos1,
        padecimientos2: this.exs.padecimientos2,
        medem: this.exs.medem,
        medimss: this.exs.medimss,
        acci1: this.exs.acci1,
        acci2: this.exs.acci2,
        acci3: this.exs.acci3,
        accidescrip: this.exs.accidescrip
      }
      );

    }else{
      window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
      //this.router.navigate(['/']);

    }
  });  



}

onGuardarexpediente(data)
{
console.log("sendtoguardarsu usuario");
//console.log(data);
this.http.post(Constantes.capiURL+"Expediente",data).subscribe(data => {

  this.sucessdata = data;
  if(this.sucessdata['status'] == "success"){

  //this.eqs = this.sucessdata['data'];
  window.alert(this.sucessdata['mensaje']);
  }else{
    window.alert(this.sucessdata['mensaje']);// + '    No autorizado');
    //this.router.navigate(['/']);

  }
});  


//console.log("post postsendtoguardarsu usuario");
}
  



 
   
  
  
     
 
}
