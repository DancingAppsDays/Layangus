import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Constantes } from 'src/app/constantes';


//import { Obj } from '@popperjs/core';
//FOr graphs
//import { ChartDataSets, ChartOptions } from 'chart.js';
//import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-reportgraf',
  templateUrl: './reportgraf.component.html',
  styleUrls: ['./reportgraf.component.css']
})
export class ReportgrafComponent implements OnInit {

 
  url = Constantes.capiURL +"Examenmes/" //"Reportem/";   //remportem1 ? ?
  urlz: string = "http://127.0.0.1:8000/api/Reportem/";
  eqs: any;
  querid: any;
  id: string = '';
  arraytemp = [];   //Create at RUNTIME????
  arraytemp2 = [];
  arraytemp3 = [];
  arraytemp4 = [];
  arraytemp5 = [];

  //lineChartData: ChartDataSets[];

  // lineChartLabels: Label[] ;

  constructor(private http :HttpClient, private router: Router, private router2: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
     
      this.querid=params; })

 
      this.http.get(this.url+ this.querid.idempleado).subscribe(result => 
          {
          this.eqs = result['data'];//data;
         
          console.log(this.eqs);

          this.arraytemp = []; //refresh every time... maybe, con los otros no fue necesario, check nav

            //IF RESULT GOOD... obvious since last compoenent.

            
         
            //var obj = JSON.stringify(this.eqs); 
             
              this.eqs.forEach(element => {
               
                //console.log(element.azucar);   //FUNCIONAAAA
                     //DIRECTO DEL JSON:... bad practice??
              
                var $strink = element.created_at;//fecha;
                var $strink2 = element.imcsignos;//azucar;
                
                                        
                //this.lineChartData.push({data:$strink2.toString()});  //create 5 data sets.... //was mute


                this.arraytemp.push($strink2); //  .toString()) cannot tostring nyull--
                this.arraytemp2.push(element.fcsignos)
                this.arraytemp3.push(element.frsignos);//presionA)


                this.lineChartLabels.push($strink.toString()); //tosintrg()??   //was mute
               //, label:"Somethingelse");
              });
                console.log("afterrr arrayedd");


                //last muted
                this.lineChartData = [    { data: this.arraytemp, label: 'IMC' },  { data: this.arraytemp2, label: 'FC' }, { data: this.arraytemp3, label: 'FR' }  ];
          
        });

  }


  //GRAPG
 
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Change on init' },


  ];

  lineChartLabels: Label[] = [];//'January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,//,,


    /*  //didnt do shitt...
    pointBorderWidth : 113,
    pointHitRadius : 111,
    pointStyle : 'triangle'*/

    //onClick: this.alertbox()  //did it activate on INIT??yes, and not much else
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

 
  borderWidth= 51;
  hoverBorderWidth=  51;

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'bar';//line';

  /*
  pointBorderWidth = 113;
  pointHitRadius = 111;
  pointStyle = 'triangle';*/

   alertbox(): void {
      
      window.alert("ALERBOXXXX");
      console.log("ALERBOX")
    }


     //ERASEEE*/
}