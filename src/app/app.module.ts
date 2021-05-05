import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListempleadosComponent } from './component/listempleados/listempleados.component';
import { ListamaquinasComponent } from './component/listamaquinas/listamaquinas.component';
import { EmpleadoeditComponent } from './component/empleadoedit/empleadoedit.component';
import { MaquinaeditComponent } from './component/maquinaedit/maquinaedit.component';
import { ListapasesmedicosComponent } from './component/listapasesmedicos/listapasesmedicos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';  
import { AuthinterceptorService } from './service/authinterceptor.service';
import { ExpedientemComponent } from './component/expedientem/expedientem.component';
import { ExamemperiodComponent } from './component/examemperiod/examemperiod.component';
import { ReportaccidenteComponent } from './component/reportaccidente/reportaccidente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignaturePadComponent } from './component/signature-pad/signature-pad.component';
import { ExamenperiodlistComponent } from './component/examenperiodlist/examenperiodlist.component';
import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegistraruserComponent } from './component/registraruser/registraruser.component';
import { TurnosempleadoComponent } from './component/turnosempleado/turnosempleado.component';
import { ListaincidentesComponent } from './component/listaincidentes/listaincidentes.component';
import { ReportgrafComponent } from './component/reportgraf/reportgraf.component';
import { ListareportgrafComponent } from './component/listareportgraf/listareportgraf.component';
import { ExameneslastsComponent } from './component/exameneslasts/exameneslasts.component';
import { TurnoanadirComponent } from './component/turnoanadir/turnoanadir.component';
import { UsodetailnewComponent } from './component/usodetailnew/usodetailnew.component';

import { ChartsModule } from 'ng2-charts';
import { PuestoeditComponent } from './component/puestoedit/puestoedit.component';
import { ListpuestoComponent } from './component/listpuesto/listpuesto.component';
import { PortadaComponent } from './component/portada/portada.component';
import { AudioexComponent } from './component/audioex/audioex.component';
import { AudioexlistComponent } from './component/audioexlist/audioexlist.component';
import { AudioexgrafComponent } from './component/audioexgraf/audioexgraf.component';
import { ListaareasComponent } from './component/listaareas/listaareas.component';
import { AreasComponent } from './component/areas/areas.component';
import { ConsultaadvComponent } from './component/consultaadv/consultaadv.component';
import { AgGridModule } from 'ag-grid-angular';
import { AggridconsultaComponent } from './component/aggridconsulta/aggridconsulta.component';
import { ListaplantasComponent } from './component/listaplantas/listaplantas.component';
import { PlantasComponent } from './component/plantas/plantas.component';
import { ExamenespiroComponent } from './component/examenespiro/examenespiro.component';
import { ExamenespirolistComponent } from './component/examenespirolist/examenespirolist.component';
import { ListaperiodosComponent } from './component/listaperiodos/listaperiodos.component';
import { ExperiodosdetailComponent } from './component/experiodosdetail/experiodosdetail.component';
import { ListaperiodosglobalComponent } from './component/listaperiodosglobal/listaperiodosglobal.component';


//import { CommonModule } from '@angular/common'; //??
import { ExamenlaborinaComponent } from './component/examenlaborina/examenlaborina.component';
import { ExamenlaborinalistComponent } from './component/examenlaborinalist/examenlaborinalist.component';
import { ExamenlabsangreComponent } from './component/examenlabsangre/examenlabsangre.component';
import { ExamenlabsangrelistComponent } from './component/examenlabsangrelist/examenlabsangrelist.component';
import { ExamenrayosxComponent } from './component/examenrayosx/examenrayosx.component';
import { ExamenrayosxlistComponent } from './component/examenrayosxlist/examenrayosxlist.component';
//import {AgGridModule}

//import SignaturePad from 'signature_pad'; //fuck this
//import { HttpserviceService } from './service/httpservice.service';

/*    //Safety ffirst biach
var firebaseConfig = {
  apiKey: "asdfasdf",
  authDomain: "asdfasdf",
  projectId: "asdf",
  storageBucket: "asdfasdf",
  messagingSenderId: "ghdffhdfgh36",
  appId: "hdfghdfghdfghdfgh"
};*/

@NgModule({
  declarations: [
    AppComponent,
    ListempleadosComponent,
    ListamaquinasComponent,
    EmpleadoeditComponent,
    MaquinaeditComponent,
    ListapasesmedicosComponent,
    ExpedientemComponent,
    ExamemperiodComponent,
    ReportaccidenteComponent,
    SignaturePadComponent,
    ExamenperiodlistComponent,
    
    LoginComponent,
    RegistraruserComponent,
    TurnosempleadoComponent,
    ListaincidentesComponent,
    ReportgrafComponent,
    ListareportgrafComponent,
    ExameneslastsComponent,
    TurnoanadirComponent,
    UsodetailnewComponent,
    PuestoeditComponent,
    ListpuestoComponent,
    PortadaComponent,
    AudioexComponent,
    AudioexlistComponent,
    AudioexgrafComponent,
    ListaareasComponent,
    AreasComponent,
    ConsultaadvComponent,
    AggridconsultaComponent,
    ListaplantasComponent,
    PlantasComponent,
    ExamenespiroComponent,
    ExamenespirolistComponent,
    ListaperiodosComponent,
    ExperiodosdetailComponent,
    ListaperiodosglobalComponent,
    ExamenlaborinaComponent,
    ExamenlaborinalistComponent,
    ExamenlabsangreComponent,
    ExamenlabsangrelistComponent,
    ExamenrayosxComponent,
    ExamenrayosxlistComponent,
    //AngularFirestoreModule,   //cannot import and declared in yout own ngmodules....
    //AngularFireStorageModule,
    //AngularFireStorage
  ],



  
  imports: [ AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,

    ReactiveFormsModule,     
    NgxPaginationModule,
    Ng2SearchPipeModule,
   
    ChartsModule,

    AgGridModule.withComponents([]) //NOT COMPAIBLE CON ANG 9?


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi:true
    }//,
     
    //HttpserviceService  //fuck this guy, ruins everything with cors
    


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 