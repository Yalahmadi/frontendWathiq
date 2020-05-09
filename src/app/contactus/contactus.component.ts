import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
model: contactusViewModel={
name:'',
email:'',
yourMassage:''
};
  constructor() { }

  ngOnInit() {
  }

  sendContactus():void{
err=>{
  alert(" an error has occurred while sending the massage");
}
 }
  
}

export interface contactusViewModel {

name:string;
email:string;
yourMassage:string;

} 
