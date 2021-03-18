import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-aggridconsulta',
  templateUrl: './aggridconsulta.component.html',
  styleUrls: ['./aggridconsulta.component.css']
})
export class AggridconsultaComponent implements OnInit {




  url = Constantes.capiURL +  "Examenmesx";   //En "empleados" no funciona pq tambien da status y mensajeee.....
  successdata: any;
  gridApi: any;
  columnApi: any;

private params:any;
  
  
  //rowData:any[6]; //no funcionó sin especificar tamaño WTF

  constructor( private http :HttpClient,private router: Router) { }

  ngOnInit(): void {

  //this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json') //YA NO JALA
  fetch(this.url)//'https://www.ag-grid.com/example-assets/small-row-data.json')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData)
  //.then(this.gridOptions.sizeColumnsToFit())
  ;
    //this.getdata();

   // autoSizeColumn(colKey, skipHeader)



   
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
            this.graficar(params.data.idempleado,params.data.nombre)
        }
      }
  
  rowData: any[]
  
  columnDefs = [
    {  field: 'idempleado',sortable: true, filter:true, resizable: true, width:74 },  //was "74px", pero al borrar rel=stylesheet en himl surgie esa warnin cellStyle: {color: 'red', 'background-color': 'green'}},
    {  field: 'nombre',sortable: true, filter:true, resizable: true ,cellClassRules:{   "ag-green": (params) =>{
      if(true) return{ background:'red' , color:'white' }    } }  //cellStyle: (params)=>{return 'test'}},// didnt work cellClass["ag-green","test"]},
  },
    {  field: 'edad',sortable: true, filter:'agNumberColumnFilter', width:111},
    {  field: 'area',sortable: true, filter:true,width:111, resizable: true},
    {  field: 'imcsignos',sortable: true, filter:'agNumberColumnFilter', headerName:'IMC',width:111, resizable: true, cellStyle:(params) =>{
      if(params.value>24) return{ background:'red' , color:'white' }    }
    },
    {  field: 'pesosignos',sortable: true, filter:'agNumberColumnFilter',headerName:'Peso',width:111, resizable: true},
    {  field: 'frsignos',sortable: true, filter:'agNumberColumnFilter' ,headerName:'Frecuencia Respiratoria',width:111, resizable: true},
    {  field: 'fcsignos',sortable: true, filter:'agNumberColumnFilter', headerName:'Frecuencia cardiaca',width:111, resizable: true},
    {  field: 'created_at',sortable: true, filter:true, headerName:'Fecha Examen'}, //agDateColumnFilter No funciona con ese formato... tampoco numerico, solo string..
    {  field: 'apto',sortable: true, filter:true},
    
    /*
    {  field: 'Accion',  cellRenderer: 'btnCellRenderer',
    cellRendererParams: {
      clicked: function(field: any) {
        alert(`${field} was clicked`);
      }
    },
    minWidth: 150,
  }*/ {  field: 'Accion',headerName:'action',cellRenderer: function(params){
    return '<div><button >Graficar Salud</button></div>'
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

    /*
              this.rowStyle = { background: 'black' };

              // set background colour on even rows again, this looks bad, should be using CSS classes
              this.getRowStyle = params => {
                  if (params.node.rowIndex % 2 === 0) {
                      return { background: 'red' };
                  }
              };           
 */

/*
  columnDefs = [
    { field: 'make',sortable: true, filter:true },
    { field: 'model',sortable: true, filter:true  },
    { field: 'price',sortable: true, filter:true }
];

  rowData =[
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];*/


getdata()
 { 
   this.http.get(this.url).subscribe(data =>
     {console.log(data);
    
      //this.rowData = data;
      this.successdata =data;
console.log(this.successdata);
       //this.empForm.get("name").setValue(data)
       //this.empm.name =
       //this.empm = data;
       //this.exs =  data;//data['dat'];     //NOT STANDARIZED APIREST
       //this.updateform(data);
     }, 
     error =>{
       console.log(error);
       window.alert("Error: "+ error.error.message);
     
   }


     );
     //this.empForm.append("name", this.empForm.get('name').value);

    
 }

 actionbut()
 {
  //this.gridOptions.onGridReady.

 // refresh the grid
//this.gridOptions.api.refreshView();

// resize columns in the grid to fit the available space
//this.gridOptions.columnApi.sizeColumnsToFit();


 }

 graficar(idempleado: any,nombre:any)  //more like graficar
{

//console.log(examen)
this.router.navigate(['reportsingle'],{
queryParams:{
//id:examen.id,
idempleado: idempleado,
nombre: nombre,//this.querid.nombre,

//puesto:examen.puesto
}
})

}
}
