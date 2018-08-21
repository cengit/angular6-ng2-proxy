import { Component } from '@angular/core';
import  * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';
  get(){
    console.log("get...")
    const url = "test/req/server.php?a=234&b=dddd333";
    $.get("test/req/server.php",{param1:"haha222",param2:"hehe"},function(result){
      $("#ret").html(result);
    });
  }

  post(){
    console.log("post...");
    $.post("test/req/server.php",{param1:"haha222",param2:"hehe"},function(result){
      $("#ret").html(result);
    });
  }
}
