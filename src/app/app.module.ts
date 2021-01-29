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
import { EstudiosmeComponent } from './component/estudiosme/estudiosme.component';


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
    EstudiosmeComponent,
    LoginComponent,
    RegistraruserComponent,
    TurnosempleadoComponent,
    ListaincidentesComponent,
    ReportgrafComponent,
    ListareportgrafComponent,
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
 