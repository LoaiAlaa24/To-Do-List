import { Component, OnInit } from '@angular/core';



import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {errorHandler} from "@angular/platform-browser/src/browser";
import {environment} from "../../environments/environment";
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-mainPage',
    styleUrls:[
          './styles.css'
        ],
  templateUrl:"./mainPage.component.html"
})
export class MainPageComponent  {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  response=""

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) {}

login(){

  var config = {
    headers: {
        'Content-Type': 'application/json'
    }
}


  this.http.post("/api/user/login/",this.profileForm.value,config).subscribe(res => {
    this.response= res["msg"];
    this.router.navigateByUrl("/todolist");
    sessionStorage.setItem("username",res["data"]["username"]);


},err =>{

this.response=(err["error"]["msg"]);


}
)



}



}
