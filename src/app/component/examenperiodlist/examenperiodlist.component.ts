import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';  
//import { Route } from '@angular/compiler/src/core'; //who knows whats this
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-examenperiodlist',
  templateUrl: './examenperiodlist.component.html',
  styleUrls: ['./examenperiodlist.component.css']
})
export class ExamenperiodlistComponent implements OnInit {

  successdata:any;
  json: any;
  querid: any;
  id: string = '';
  url = Constantes.capiURL + "Examenmes/";
  menuexas: boolean = false;

  gridApi: any;
  columnApi: any;
  private params:any;
  


  constructor(private http :HttpClient, private router2: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
     // console.log(params);
      //console.log(params.id + "id of params...");
      this.querid=params;   //id, nombre

  });
  this.getdata();

  fetch(Constantes.capiURL +  "Examenmesagg/" + this.querid.id )//this.url+ this.querid.id)//'https://www.ag-grid.com/example-assets/small-row-data.json')
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

getdata()
{
  this.http.get(this.url+ this.querid.id).subscribe(result =>
    {
      


      this.successdata = result;
      console.log(this.successdata);

      if(this.successdata['status'] == "success"){

        this.json = this.successdata['data'];
        }else{
          window.alert(this.successdata['data']);// + '    No autorizado');
          //this.router.navigate(['/']);    
          //(<any>this.router).navigate(['/']); //COMPilation errorr check package.hjson... 
        }

    }
      );

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
  gotoreportes(equipo:any){
    this.router.navigate(['reportsingle'],{
      queryParams:{
        id:equipo.id,
        idempleado:equipo.id,
        nombre:equipo.nombre
      }
  
  })
  }

  //NUEVO diseño para cont..

  abrirmenuexa()
{
  if(this.menuexas ==false)
  this.menuexas = true;
  else this.menuexas = false;

}

gotoaudios(equipo:any){     //UNUSED HERE?
  this.router.navigate(['listaaudios'],{
    queryParams:{
      id:equipo.id,
      nombre:equipo.nombre
    }

})
}
nuevoau()
{
  this.router.navigate(['audioex'],{
    queryParams:{
      idempleado:this.querid.id,
      nombre:this.querid.nombre
     
    }


})
}



verestudio(id:any,idempleado: any,nombre:any, tipoexamen:any)  //more like graficar
{

  if(tipoexamen == 'audiometria')
  {
    this.router.navigate(['audioex'],{
      queryParams:{
        id:id,
        idempleado:idempleado,
        nombre:nombre
       
      }


  })

  }else if(tipoexamen == 'periodico')
  {
    //console.log(examen)
    this.router.navigate(['examemperiod'],{
      queryParams:{
        id:id,
        idempleado: this.querid.idempleado,
        nombre: this.querid.nombre,
        //puesto:examen.puesto
      }
    })

  }


}


  //MOdified to aGG

  
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
                this.verestudio(params.data.id,params.data.idempleado,params.data.nombre, params.data.tipoexamen)
            }
          }
      
      rowData: any[]
      
      columnDefs = [
        /*{  field: 'idempleado',sortable: true, filter:true, resizable: true, width:74 },  //was "74px", pero al borrar rel=stylesheet en himl surgie esa warnin cellStyle: {color: 'red', 'background-color': 'green'}},
        {  field: 'nombre',sortable: true, filter:true, resizable: true ,cellClassRules:{   "ag-green": (params) =>{
          if(true) return{ background:'red' , color:'white' }    } }  //cellStyle: (params)=>{return 'test'}},// didnt work cellClass["ag-green","test"]},
      },*/
        
        {  field: 'created_at',sortable: true, filter:true, headerName:'Fecha Examen'}, //agDateColumnFilter No funciona con ese formato... tampoco numerico, solo string..
        {  field: 'tipoexamen',sortable: true, filter:true, headerName:'Tipo examen'},
        
        /*
        {  field: 'Accion',  cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          clicked: function(field: any) {
            alert(`${field} was clicked`);
          }
        },
        minWidth: 150,
      }*/ {  field: 'Accion',headerName:'action',cellRenderer: function(params){
        return '<div><button >Ver estudio </button></div>'
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
