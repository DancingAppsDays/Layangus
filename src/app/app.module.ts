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
//import { HttpserviceService } from './service/httpservice.service';

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
    ReportaccidenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    


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
