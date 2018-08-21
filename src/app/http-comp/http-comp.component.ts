import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  * as $ from 'jquery';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  get(){
    const url = "test/req/server.php?a=234&b=dddd333";
    this.http.get(url).subscribe(data => {
      $("#ret").html(data);
    })
  }

  post(){
    const url = "test/req/server.php?a=234&b=dddd333";
    this.http.post(url,{param1:"haha222",param2:"hehe"}).subscribe(data => {
      $("#ret").html(data);
    })
  }

}
