import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoeditComponent } from './component/empleadoedit/empleadoedit.component';
import { EstudiosmeComponent } from './component/estudiosme/estudiosme.component';
import { ExamemperiodComponent } from './component/examemperiod/examemperiod.component';
import { ExamenperiodlistComponent } from './component/examenperiodlist/examenperiodlist.component';
import { ExpedientemComponent } from './component/expedientem/expedientem.component';
import { ListaincidentesComponent } from './component/listaincidentes/listaincidentes.component';
import { ListamaquinasComponent } from './component/listamaquinas/listamaquinas.component';
import { ListareportgrafComponent } from './component/listareportgraf/listareportgraf.component';
import { ListempleadosComponent } from './component/listempleados/listempleados.component';
import { LoginComponent } from './component/login/login.component';
import { RegistraruserComponent } from './component/registraruser/registraruser.component';
import { ReportaccidenteComponent } from './component/reportaccidente/reportaccidente.component';
import { ReportgrafComponent } from './component/reportgraf/reportgraf.component';
import { TurnosempleadoComponent } from './component/turnosempleado/turnosempleado.component';

const routes: Routes = [

  {path: 'listempleado', component: ListempleadosComponent},
  {path: 'empleadoform', component:EmpleadoeditComponent},
  {path: 'listamaquina', component:ListamaquinasComponent},
  {path: 'expedientem', component:ExpedientemComponent},
  {path: 'examemperiod', component:ExamemperiodComponent},
  {path: 'incidentes', component:ReportaccidenteComponent},
  {path:'listaincidentes',component:ListaincidentesComponent},
  {path: 'examemperiodlist', component:ExamenperiodlistComponent},
  {path: 'estudiosme', component:EstudiosmeComponent},
  {path:'login',component:LoginComponent},
  {path:'registry',component:RegistraruserComponent},
  {path:'turnosform',component:TurnosempleadoComponent},
  {path:'reportem',component:ListareportgrafComponent},
  {path:'reportsingle',component:ReportgrafComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
