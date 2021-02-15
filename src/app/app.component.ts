import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'layangus';
sesion:any;


  ngOnInit(): void {

  // console.log("guardasesion");
    //this.sesion = sessionStorage.getItem('session');
    //console.log(this.sesion);
  }

  ngDoCheck() {
    this.sesion = sessionStorage.getItem('session');
    //console.log(this.sesion);
    //console.log("dochecked");
  }
}
  