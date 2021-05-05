import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoeditComponent } from './component/empleadoedit/empleadoedit.component';

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
import { MaquinaeditComponent } from './component/maquinaedit/maquinaedit.component';
import { ExameneslastsComponent } from './component/exameneslasts/exameneslasts.component';
import { TurnoanadirComponent } from './component/turnoanadir/turnoanadir.component';
import { UsodetailnewComponent } from './component/usodetailnew/usodetailnew.component';
import { PuestoeditComponent } from './component/puestoedit/puestoedit.component';
import { ListpuestoComponent } from './component/listpuesto/listpuesto.component';
import { PortadaComponent } from './component/portada/portada.component';
import { AudioexlistComponent } from './component/audioexlist/audioexlist.component';
import { AudioexComponent } from './component/audioex/audioex.component';
import { AudioexgrafComponent } from './component/audioexgraf/audioexgraf.component';
import { ListaareasComponent } from './component/listaareas/listaareas.component';
import { AreasComponent } from './component/areas/areas.component';
import { ConsultaadvComponent } from './component/consultaadv/consultaadv.component';
import { AggridconsultaComponent } from './component/aggridconsulta/aggridconsulta.component';
import { ListaplantasComponent } from './component/listaplantas/listaplantas.component';
import { PlantasComponent } from './component/plantas/plantas.component';
import { ExamenespirolistComponent } from './component/examenespirolist/examenespirolist.component';
import { ListaperiodosComponent } from './component/listaperiodos/listaperiodos.component';
import { ExperiodosdetailComponent } from './component/experiodosdetail/experiodosdetail.component';
import { ListaperiodosglobalComponent } from './component/listaperiodosglobal/listaperiodosglobal.component';
import { ExamenlaborinaComponent } from './component/examenlaborina/examenlaborina.component';
import { ExamenlabsangreComponent } from './component/examenlabsangre/examenlabsangre.component';
import { ExamenlaborinalistComponent } from './component/examenlaborinalist/examenlaborinalist.component';
import { ExamenlabsangrelistComponent } from './component/examenlabsangrelist/examenlabsangrelist.component';

const routes: Routes = [

  {path: 'listempleado', component: ListempleadosComponent},
  {path: 'empleadoform', component:EmpleadoeditComponent},
  {path: 'listamaquina', component:ListamaquinasComponent},
  {path: 'equipos', component:MaquinaeditComponent},
  {path: 'expedientem', component:ExpedientemComponent},
  {path: 'examemperiod', component:ExamemperiodComponent},
  {path: 'incidentes', component:ReportaccidenteComponent},
  {path:'listaincidentes',component:ListaincidentesComponent},
  {path: 'examemperiodlist', component:ExamenperiodlistComponent},
 
  {path:'login',component:LoginComponent},
  {path:'registry',component:RegistraruserComponent},
  {path:'turnosform',component:TurnosempleadoComponent},
  {path:'reportem',component:ListareportgrafComponent},
  {path:'reportsingle',component:ReportgrafComponent},
  {path: 'examenlasts', component:ExameneslastsComponent},
  {path: 'turnonew',component:TurnoanadirComponent},
  {path: 'usodetailnew', component:UsodetailnewComponent},
  {path: 'puestos',component:PuestoeditComponent},
  {path:'listapuestos',component:ListpuestoComponent},
  {path:'', component:PortadaComponent},
  {path:'listaaudios', component:AudioexlistComponent},
  {path:'audioex', component:AudioexComponent},
  {path:'audioexgraf', component:AudioexgrafComponent},
  {path:'listarea', component:ListaareasComponent},
  {path:'areaedit',component:AreasComponent},
  {path:'consultadv',component:ConsultaadvComponent},
  {path:'aggcon',component:AggridconsultaComponent},
  {path:'listaplanta', component:ListaplantasComponent},
  {path:'plantaedit',component:PlantasComponent},

  {path:'listaespiros', component:ExamenespirolistComponent},

 {path:'periodicos', component:ListaperiodosComponent},
 {path:'periodetalle', component:ExperiodosdetailComponent},
 {path:'listaperiodicosglobal', component:ListaperiodosglobalComponent},


 { path:'examenlaborina',component:ExamenlaborinaComponent},
 { path:'examenlabsangre',component:ExamenlabsangreComponent},
 { path:'examenlaborinalist',component:ExamenlaborinalistComponent},
 { path:'examenlabsangrelist',component:ExamenlabsangrelistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
