import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import SignaturePad from 'signature_pad';

//import { AngularFirestore} from '@angular/fire/firestore';
//import{AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';


@Component({
  selector: 'eatass-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent implements OnInit, AfterViewInit {

  @ViewChild('sPad', {static: true}) signaturePadElement;
 
  signaturePad: any;
  filePathHelper: any;
  path: any;
  //const childEvent:any;


  //UNUsed, mejor viewchield acces method....
  @Input() _hidecanvas: any;
  set hidecanvas(any)
  {
    this.whoIam();
  }

  
  filePath: string;
  //storage: any;


   
                                 //couldnt find... at first
  constructor(private storage: AngularFireStorage) { }

 // @Input() name: string;
  @Output()
  childEvent:EventEmitter<string> = new EventEmitter<string>();        //REQUERIDO PARA LLAMAR A FUNCTION EN PADRE COMPONENT...L
  @Output()
  childEvent2:EventEmitter<string> = new EventEmitter<string>(); 
  addevent(){
      this.childEvent.emit();// localStorage.getItem("signaturetemp"));
      //localStorage.getItem("signaturetemp");
  }
  eraseevent(){
    this.childEvent2.emit();// "unsigned");
    //localStorage.getItem("signaturetemp");
}


  


  whoIam() {
    return 'I am a child!!';
  }

  ngOnInit(): void {

    //this.childEvent.emit("This is the child component");
    var signed = document.getElementById("signed");
    
   signed.style.display='none';
    if(this.hidecanvas)
    {
    //

   this.showImage(); 

    }
  }

  ngOnChanges() {
    console.log("onchangedd"); // reference with this
    //this.hidecanvas =...
}


  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  changeColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.signaturePad.penColor = color;
  }

  clear() {
    this.signaturePad.clear();
    //this.eraseevent();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

  download(dataURL, filename) {

    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);


     
      //return this.http.get('assets/signaturetest.jpg');
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }


savetolocal()
{
  //console.log("pretest");
 
  //console.log("pretestposttt");
  //var elephant = document.getElementById("elephant");

  // Take action when the image has loaded
  //elephant.addEventListener("load", function () {
   //   var imgCanvas = document.createElement("canvas"),
  //        imgContext = imgCanvas.getContext("2d");
  //}
      // Make sure canvas is as big as the picture
     /* imgCanvas.width = elephant.width;
      imgCanvas.height = elephant.height;
  
      // Draw image into canvas element
      imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);
  */
      // Get canvas contents as a data URL
  //console.log("Save to local");


  //imgData = getBase64Image(bannerImage);
  //localStorage.setItem("imgData", imgData);

      
      if (this.signaturePad.isEmpty()) {
        alert('Please provide a signature first.');
      } else {
        //const dataURL = this.signaturePad.toDataURL();
      var imgAsDataURL = this.signaturePad.toDataURL("image/jpg");//was png
      }
      // Save image into localStorage
      try {
          localStorage.setItem("signaturetemp", imgAsDataURL);
          console.log("SaveDDDD to local");
          //this.showlocalsign();                //todo: HIDE canvas show imagen, with resign button.....
            this.showImage();
            this.addevent();                      //EMITE LA cadena imagen al compoenent padre examen para patchear el value del form antes de submit--
      }
      catch (e) {
          console.log("Storage failed: " + e);
      }
  //}, false); 



}

restart() {
  this.eraseevent();
  this.signaturePad.clear();
  var signdiv = document.getElementById("signahide");
  
 signdiv.style.display='block';
 var signed = document.getElementById("signed");
    
 signed.style.display='none';

 localStorage.setItem("signaturetemp", "unsigned"); //different name than validators of form default
}

showImage() { this.path = ''; setTimeout(() => { this.path = localStorage.getItem("signaturetemp");},100);//this.filePathHelper.getFilePath('signaturetemp.jpeg'); }, 100);
  //console.log("after showIMage");

  var signdiv = document.getElementById("signahide");
  //signdiv.style.isVisible = 'false';
  //signdiv.style.hidden=true;
 signdiv.style.display='none';
 var signed = document.getElementById("signed");
    
 signed.style.display='block';
}
 

 

  saveJPG() {
     this.savetolocal();
  }

  saveSVG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/svg+xml');
      this.download(dataURL, 'signature.svg');
    }
  }
  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      //this.download(dataURL, 'signature.png');
      this.onUpload(dataURL);
    }
  }

  //de Alex Alvear
  onUpload(DATA_URL) {
    const namephoto: string = "somastring.jpg";//this.pacienteForm.controls['pac_curp'].value+'.jpg'; this.pacienteForm.controls['pac_curp'].value
    //this.filePath = 'uploads/'+"namepaciente"+ '/' + namephoto;
    this.filePath = 'uploads/somfile.jpg';

    const ref = this.storage.ref(this.filePath);          //declared property storage??
    const task = ref.putString(DATA_URL, 'data_url');

    return this.filePath;
  }

  

}