import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoeditComponent } from './component/empleadoedit/empleadoedit.component';
import { ExamemperiodComponent } from './component/examemperiod/examemperiod.component';
import { ExpedientemComponent } from './component/expedientem/expedientem.component';
import { ListamaquinasComponent } from './component/listamaquinas/listamaquinas.component';
import { ListempleadosComponent } from './component/listempleados/listempleados.component';

const routes: Routes = [

  {path: 'listempleado', component: ListempleadosComponent},
  {path: 'empleadoform', component:EmpleadoeditComponent},
  {path: 'listamaquina', component:ListamaquinasComponent},
  {path: 'expedientem', component:ExpedientemComponent},
  {path: 'examemperiod', component:ExamemperiodComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
