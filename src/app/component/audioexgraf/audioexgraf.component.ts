import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-audioexgraf',
  templateUrl: './audioexgraf.component.html',
  styleUrls: ['./audioexgraf.component.css']
})
export class AudioexgrafComponent implements OnInit {

  
  url = Constantes.capiURL +"Audios/" //"Reportem/";   //remportem1 ? ?
  //urlz: string = "http://127.0.0.1:8000/api/Reportem/";
  eqs: any;
  querid: any;
  id: string = '';

  arraytemp = [];   //Create at RUNTIME????
  arraytemp2 = [];
  arraytemp3 = [];
  arraytemp4 = [];
  

  arraofarray = [] //[number,string];
linechartpre =[];
linechartpre2 =[];
 //arraofarray: Array<Array<string>>;

  counter:number =0;
  /*
  ai500 = [];
  ai1000 = [];
  ai2000 = [];
  ai3000 = [];
  ai4000 = [];
  ai6000 = [];
  ai8000 = [];*/

  //lineChartData: ChartDataSets[];

  // lineChartLabels: Label[] ;

  constructor(private http :HttpClient, private router: Router, private router2: ActivatedRoute) { }
  

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
     
      this.querid=params; })

 
      this.http.get(this.url+ this.querid.idempleado).subscribe(result => 
          {
          this.eqs = result['data'];//data;
         
          //console.log(this.eqs);
/*
          this.eqs =this.eqs[this.eqs.length-1]
          console.log(this.eqs);

          this.arraytemp.push(this.eqs.i250);
          this.arraytemp.push(this.eqs.i500);
          this.arraytemp.push(this.eqs.i1000);
            this.arraytemp.push(this.eqs.i2000);
              this.arraytemp.push(this.eqs.i3000);
                this.arraytemp.push(this.eqs.i4000);
                  this.arraytemp.push(this.eqs.i6000);
                    this.arraytemp.push(this.eqs.i8000);

                    this.arraytemp2.push(this.eqs.d250);
                    this.arraytemp2.push(this.eqs.d500);
                    this.arraytemp2.push(this.eqs.d1000);
                      this.arraytemp2.push(this.eqs.d2000);
                        this.arraytemp2.push(this.eqs.d3000);
                          this.arraytemp2.push(this.eqs.d4000);
                            this.arraytemp2.push(this.eqs.d6000);
                              this.arraytemp2.push(this.eqs.d8000);

                              this.arraytemp3.push(this.eqs.bi250);
                              this.arraytemp3.push(this.eqs.bi500);
                              this.arraytemp3.push(this.eqs.bi1000);
                                this.arraytemp3.push(this.eqs.bi2000);
                                  this.arraytemp3.push(this.eqs.bi3000);
                                    this.arraytemp3.push(this.eqs.bi4000);
                                      this.arraytemp3.push(this.eqs.bi6000);
                                        this.arraytemp3.push(this.eqs.bi8000);
                    
                                        this.arraytemp4.push(this.eqs.bd250);
                                        this.arraytemp4.push(this.eqs.bd500);
                                        this.arraytemp4.push(this.eqs.bd1000);
                                          this.arraytemp4.push(this.eqs.bd2000);
                                            this.arraytemp4.push(this.eqs.bd3000);
                                              this.arraytemp4.push(this.eqs.bd4000);
                                                this.arraytemp4.push(this.eqs.bd6000);
                                                  this.arraytemp4.push(this.eqs.bd8000);

                              
          //this.arraytemp = []; //refresh every time... maybe, con los otros no fue necesario, check nav

            //IF RESULT GOOD... obvious since last compoenent.
              //var obj = JSON.stringify(this.eqs);  //?????
                            //
            */
              

              
              this.eqs.forEach(element => {
               
                
              var arraytemp =[];

             arraytemp.push(element.i250);
              arraytemp.push(element.i500);
             arraytemp.push(element.i1000);
               arraytemp.push(element.i2000);
                 arraytemp.push(element.i3000);
                    arraytemp.push(element.i4000);
                      arraytemp.push(element.i6000);
                        arraytemp.push(element.i8000);


                        var arraytemp2 =[];

                        arraytemp2.push(element.d250);
                         arraytemp2.push(element.d500);
                        arraytemp2.push(element.d1000);
                          arraytemp2.push(element.d2000);
                            arraytemp2.push(element.d3000);
                               arraytemp2.push(element.d4000);
                                 arraytemp2.push(element.d6000);
                                   arraytemp2.push(element.d8000);
              /*  //didnt wok
                this.arraofarray[this.counter].push(element.i250);
                this.arraofarray[this.counter].push(element.i500);
                this.arraofarray[this.counter].push(element.i1000);
                this.arraofarray[this.counter].push(element.i2000);
                this.arraofarray[this.counter].push(element.i3000);
                this.arraofarray[this.counter].push(element.i4000);
                this.arraofarray[this.counter].push(element.i6000);
                this.arraofarray[this.counter].push(element.i8000);*/

                 
                
                //  .toString()) cannot tostring nyull--
                //this.arraytemp2.push(element.fcsignos)
                //this.arraytemp3.push(element.frsignos);//presionA)


                //this.lineChartLabels.push(element.fecha.toString()); //tosintrg()??   //was mute
                //console.log(arraytemp);
               
                this.linechartpre.push( { data:  arraytemp, label: element.fecha.toString() });    //{ data: this.arraytemp, label: 'Oido izquierdo' }
                this.linechartpre2.push( { data:  arraytemp2, label: element.fecha.toString() }); 
                this.counter++;
               //, label:"Somethingelse");
              });
                //console.log("afterrr arrayedd");
                this.lineChartLabels.push("250hz");
                this.lineChartLabels.push("500hz");
                this.lineChartLabels.push("1000hz");
                this.lineChartLabels.push("2000hz");
                this.lineChartLabels.push("3000hz");
                this.lineChartLabels.push("4000hz");
                this.lineChartLabels.push("6000hz");
                this.lineChartLabels.push("8000hz");
                //this.lineChartLabels.push("500hz");

                //last muted

                this.lineChartData = this.linechartpre;

                this.lineChartData2 = this.linechartpre2;
                //this.lineChartData = [    { data: this.arraytemp, label: 'Oido izquierdo' },  { data: this.arraytemp2, label: 'Oido derecho' }, { data: this.arraytemp3, label: 'BC Izquierdo' }, { data: this.arraytemp3, label: 'BC derecho' }  ];
          

                //this.lineChartData2 = [    { data: this.arraytemp, label: 'Oido izquierdo22' },  { data: this.arraytemp2, label: 'Oido derecho22' }, { data: this.arraytemp3, label: 'BC Izquierdo22' }, { data: this.arraytemp3, label: 'BC derecho' }  ];
          
        });

  }


  //GRAPG
  
  lineChartData2: ChartDataSets[] = [
    { data: [], label: 'LINE2' },


  ];

 
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Change on init' },


  ];

  lineChartLabels: Label[] = [];//'January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,//,,
    scales: { //you're missing this
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'dB HL'
         }
      }]
   }//END scales

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
  lineChartType = 'line';//bar';

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
