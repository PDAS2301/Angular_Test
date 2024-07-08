import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  count = 0;
  title = 'my-first-project';
  name = "";
  userInput: string = '';
  Username:string="";  //Declaring a variable for Username
  Password:string="";  //Declaring a variable for Password
SessionUsername:string="" ;//Declaring variable for session storage
SessionPassword:string="";
  BtnClick() {
    this.count = this.count + 1;
  }
  BtndecreClick() {
    this.count = this.count - 1;

  }
  ResetClick() {
    this.count = 0;
  }
  Inputfun(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }

  displayValue() {

    console.log('User entered:', this.userInput);
    localStorage.setItem("User name", this.userInput);// key ke hisab se set karega
    localStorage.setItem("Jwt-token", "sgfshhfghsgfkgqeujhfjsfbsfjhasjhfajfjadfg");
    // sessionStorage.setItem("User name",this.userInput);// key ke hisab se set karega
    //sessionStorage.setItem("Jwt-token","sgfshhfghsgfkgqeujhfjsfbsfjhasjhfajfjadfg");

  }
  Clearlocalstorage() {
    //localStorage.clear();// delete al value of local storage
    localStorage.removeItem("Jwt-token");// particular key and value ko delete karega.
  }
  
  //Creating a Login Function to store a value of Username and Password in Local Storage

  Login(){
    localStorage.setItem("UserName",this.Username);
    localStorage.setItem("Password",this.Password);
  }
  Logout(){
    // localStorage.removeItem("UserName");
    localStorage.clear();
  }
  SLogin(){
    sessionStorage.setItem("SessionUsername",this.SessionUsername) ;
    sessionStorage.setItem("SessionPassword", this.SessionPassword);
  }
  SLogout(){
    sessionStorage.clear();
  }

}
