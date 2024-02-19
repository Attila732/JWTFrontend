import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

oszlopok=[
  {key:"username",text:"User name", type:"text"}, 
  {key:"firstname",text:"First name", type:"text"}, 
  {key:"lastname",text:"Last name", type:"text"}, 
  {key:"address",text:"Address", type:"text"}, 
  {key:"email",text:"Email", type:"email"}, 
  {key:"password",text:"Password", type:"password"}, 
]
newUser:any={}

  constructor(private auth:AuthService){
   
  }
  registration(){
    this.auth.register(this.newUser)

  }
}
