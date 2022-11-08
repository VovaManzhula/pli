import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petro';
   
   F1(){
 var el = document.querySelector("#dick")
  for(let i=0;i<560;i++){
    
    el?.setAttribute('class','dick move')
    console.log(el)
   }
  }
  
    
   

  

}
