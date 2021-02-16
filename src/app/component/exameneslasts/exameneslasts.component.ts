import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
selector: 'app-exameneslasts',
templateUrl: './exameneslasts.component.html',
styleUrls: ['./exameneslasts.component.css']
})
export class ExameneslastsComponent implements OnInit {

successdata:any;
json: any;
querid: any;
id: string = '';
url = Constantes.capiURL + "Examenmesx";
checks: boolean[]= [];
listajsonb: boolean[] =[];

checksf: number[] = [] //performance??

constructor(private http :HttpClient, private router2: ActivatedRoute, private router:Router) { }

ngOnInit(): void {

this.router2.queryParams.subscribe(async (params:Params)=>{
// console.log(params);
//console.log(params.id + "id of params...");
this.querid=params; //id, nombre

});

this.precheck();
this.getdata();
/*
this.http.get(this.url+ this.querid.id).subscribe(result =>

{//this.emps =result.json();
this.eqs = result;//data;

console.log(this.eqs);
});

*/
}
getdata()
{
this.http.get(this.url).subscribe(result =>
{

this.successdata = result;
console.log(this.successdata);

//if(this.successdata['status'] == "success"){

this.json = this.successdata;//['data'];
// }else{
//window.alert(this.successdata['data']);// + ' No autorizado');
//this.router.navigate(['/']);
//(<any>this.router).navigate(['/']); //COMPilation errorr check package.hjson...
//}
 this.relist(); //to init bool to true; //BUG?
}
);

}

precheck()
{
  this.checks[1] = false;// e.target.checked?true:false;
  this.checks[2] =false;
  this.checks[3] = false;
  this.checks[4] =false;


  this.checksf[1] =0;
  this.checksf[2] =0;
  this.checksf[3] =0;
  this.checksf[4] =0;
  //this.checks[1] = e.target.checked?true:false;



}


multicheckf(e)
{

switch(e.target.id)
{
case("1f"):

this.checksf[1] = e.target.value;

break;

case("2f"):

this.checksf[2] = e.target.value;

break;

case("3f"):

this.checksf[3] = e.target.value;

break;

case("4f"):

this.checksf[4] = e.target.value;

break;

default:
console.log("fieldccheckfailed");
break;
}

this.filterjson();
}

multicheck(e)
{
//console.log("time to check on changve");

//if(e.target.checked)
//{
//console.log(e.target.name);
//console.log(e.target.id);
//console.log(e.tartet.checked);
// console.log("check");

switch(e.target.id)
{
case("1"):
document.getElementById('1f').style.visibility = e.target.checked?"visible":"hidden";

this.checks[1] = e.target.checked?true:false;


//console.log(this.checks);
break;

case("2"):
document.getElementById('2'+'f').style.visibility = e.target.checked?"visible":"hidden";
this.checks[2] = e.target.checked?true:false;

break;

case("3"):
document.getElementById('3'+'f').style.visibility = e.target.checked?"visible":"hidden";
//console.log("check1");
this.checks[3] = e.target.checked?true:false;

break;

case("4"):
document.getElementById('4'+'f').style.visibility = e.target.checked?"visible":"hidden";

//console.log("check2");
this.checks[4] = e.target.checked?true:false;

break;

default:
console.log("checkfail");

break;

}
//console.log(this.checks);
//console.log("MOVED");

//this.relist();
this.filterjson();

}

relist()
{
  let i=0;
  for(let result of this.json)
  {
    this.listajsonb[i] = true;
    console.log(this.listajsonb[i]);
    i++;
  }
}

filterjson()
{


//let listajson: string[] = [];

//let listajsonb : boolean[] = [];
this.listajsonb =[]; //reset array;
//this.js

/*angular.forEach( exa in this.json)
{
}
json.Results.forEach(element => {
list.push(element.Id);
});
*/
//console.log(this.json);

let j=0;  //counter

for(let result of this.json)
{
  //console.log(result.frsignos);

var falsed = false;

if(this.checks[1] == true){

 // console.log("check11");

  //console.log("valuetocheck "+this.checksf[1])
if(parseInt(result.imcsignos)>= this.checksf[1])//this.checksf[1])
{
//console.log("aproved");
falsed = false;

}else falsed = true;
}
//console.log("about to check2 " + this.checks[2]) 

if(this.checks[2] == true){
  //console.log("check22FOCK YAA ISA TRUEE");

  //console.log("valuetocheck "+this.checksf[2])
if(parseInt(result.pesosignos)>this.checksf[2])
{
//console.log("aproved");

}else falsed = true;
}
if(this.checks[3] == true){

  //console.log("check33");
  //console.log("valuetocheck "+this.checksf[3])
  console.log(this.checksf[3]);

if(parseInt(result.frsignos)>this.checksf[3])
{
//console.log(result.frsignos + "is mayor que.. ");


}else falsed = true;
}

if(this.checks[4] == true){

if(parseInt(result.fcsignos)>this.checksf[4])
{
//console.log("aproved");

}else falsed = true;
}


if(falsed ==true)
{
  this.listajsonb[j] = false;
//listajson.push(result);
}else{
  this.listajsonb[j] = true;

}

j++;
}

//console.log("endf of fisting");
console.log(this.listajsonb);
return this.listajsonb;

//return listajson;
}

editexa(examen: any)
{

console.log(examen)
this.router.navigate(['examemperiod'],{
queryParams:{
id:examen.id,
idempleado: examen.idempleado,
nombre: this.querid.nombre,

//puesto:examen.puesto
}
})

}

nuevoexamen(equipo:any){
this.router.navigate(['examemperiod'],{
queryParams:{
idempleado:equipo.id,
nombre:equipo.nombre
}

})
}

}
