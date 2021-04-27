import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-listaperiodosglobal',
  templateUrl: './listaperiodosglobal.component.html',
  styleUrls: ['./listaperiodosglobal.component.css']
})
export class ListaperiodosglobalComponent implements OnInit {


  constructor(private http :HttpClient, private router2: ActivatedRoute, private router:Router) { }


  successdata:any;
  json: any;
  querid: any;
  id: string = '';
  //url = Constantes.capiURL + "Examenmes/";
  menuexas: boolean = false;

  gridApi: any;
  columnApi: any;
  private params:any;
  
  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
     // console.log(params);
      //console.log(params.id + "id of params...");
      this.querid=params;   //id, nombre

  });
  //this.getdata(); //unused here

  fetch(Constantes.capiURL +  "Experiod")//this.url+ this.querid.id)//'https://www.ag-grid.com/example-assets/small-row-data.json')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData)
  //.then(this.gridOptions.sizeColumnsToFit())
  ;
/*
  this.http.get(this.url+ this.querid.id).subscribe(result => 
        
    {//this.emps =result.json();
      this.eqs = result;//data;
     
      console.log(this.eqs);
    });

*/
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


  verestudio(id:any,idempleado: any,nombre:any)  //more like graficar
  {
  
   
      //console.log(examen)
      this.router.navigate(['periodetalle'],{
        queryParams:{
          id:id,
          idempleado: idempleado,
          nombre: nombre,
          //puesto:examen.puesto
        }
      })
  
  }











  btnClickedHandler(){
    this.params.clicked(this.params.value);
    console.log("butta clicked!")
    
      }
      onBtnClick(){
        this.params.clicked(this.params.value);
        console.log("butta clicked!")
        
          }
    
          onCellClicked(params: any) {
    
            //console.log("cellclicked");
        
           
        
            // tslint:disable-next-line: triple-equals
            if (params.colDef.headerName == 'action') {
     //console.log("action clickeed!");
              //console.log(params.data.idempleado);

               console.log("TO GRAFICA");
                this.verestudio(params.data.id,params.data.idempleado,params.data.nombre)
            }
          }
      
      rowData: any[]
      
      columnDefs = [
        /*{  field: 'idempleado',sortable: true, filter:true, resizable: true, width:74 },  //was "74px", pero al borrar rel=stylesheet en himl surgie esa warnin cellStyle: {color: 'red', 'background-color': 'green'}},
        {  field: 'nombre',sortable: true, filter:true, resizable: true ,cellClassRules:{   "ag-green": (params) =>{
          if(true) return{ background:'red' , color:'white' }    } }  //cellStyle: (params)=>{return 'test'}},// didnt work cellClass["ag-green","test"]},
      },*/
      {  field: 'idempleado',sortable: true, filter:true,resizable: true,width:74,  headerName:'IDEmpleado'},
      {  field: 'area',sortable: true, filter:true,resizable: true,width:114,  headerName:'Area'},
      {  field: 'puesto',sortable: true, filter:true,resizable: true,width:114,  headerName:'Puesto'},
        {  field: 'created_at',sortable: true, filter:true, headerName:'Creado en'}, //agDateColumnFilter No funciona con ese formato... tampoco numerico, solo string..
        {  field: 'fecha',sortable: true, filter:true, headerName:'Programado para'},
        {  field: 'ingreso',sortable: true, filter:true, headerName:'De ingreso'},
        {  field: 'realizado',sortable: true, filter:true, headerName:'Realizado'},
        /*
        {  field: 'Accion',  cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          clicked: function(field: any) {
            alert(`${field} was clicked`);
          }
        },
        minWidth: 150,
      }*/ {  field: 'Accion',headerName:'action',cellRenderer: function(params){
        return '<div><button >Ver examen </button></div>'
      },
      cellRendererParams: {
        //onClick: this.onBtnClick.bind(this),
        label: 'Click'
      }
        /*,   cellRenderer : function(params){
                        return '<div><button  onClick=this.onBtnClick.bind(this.innerHTML)>Click</button></div>'
                      }*/
      
      /*cellRenderer:'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick.bind(this),
        label: 'Click'
      }*/
    
    
     // : function(params){
      //  return '<div><button onClick=this.onBtnClick.bind(this)>Click</button></div>'
    
    //}
    }
        
                  ];
    
                  drop() {
                    alert("BUTTON CLICKEFffD")
                }
                  
    gridOptions = {
    
    
      
        // PROPERTIES
        // Objects like myRowData and myColDefs would be created in your application
       // rowData: this.rowData,
       rowData:[],
        columnDefs: this.columnDefs,
        pagination: true,
        rowSelection: 'single',
        rowDragManaged:true,
        animateRows:true,
    
        // EVENTS
        // Add event handlers
        //onRowClicked: event => console.log('A row was clicked'),
        //onColumnResized: event => console.log('A column was resized'),
        /*onGridReady: event => {
          
          console.log('The grid is now ready'),
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
        }*/
    
    
        onGridReady : (params) =>{
          console.log('The grid is now ready')
          this.gridApi = params.api;
          this.columnApi = params.columnApi;
          this.gridApi.sizeColumnsToFit();
    
        },
        // CALLBACKS
        //isScrollLag: () => false,  //NOT COmpatible??
    
    
        rowStyle: { background: 'white' },
    
        // set background colour on even rows again, this looks bad, should be using CSS classes
        getRowStyle: params => {
            if (params.node.rowIndex % 2 === 0) {
                return { background: 'silver' };
            }
        },
    
        getRowClass: params => {
          if (params.data.IMC < 30) {
            console.log("SUMMMMM ag fun");
              return { background: 'red' };
          }
      },
    
    
    
    //rowClassRules
    /*
    rowClassRules: {
      // apply green to 2008    //was aag-green-outer"
      "ag-green": function(params) {return params.data.imcsignos < 1111; },
    
      // apply amber 2004
      "ag-amber-outer": function(params) { return params.data.imcsignos > 21; },
    
      // apply red to 2000    //was rag-red
      "ag-red-outer": function(params) { return params.data.year === 2000; }
    },*/
    
    
    
                rowClassRules: {
                    "ag-green": '12 < 20',
                    'ag-amber': 'data.imcsignos >= 20 && data.imcsignos < 25',
                    'ag-red': 'data.imcsignos >= 25'
                }
    }
    
    
     myRowClickedHandler(event) {
      console.log('The row was clicked! ! ! 1');
    }














}
