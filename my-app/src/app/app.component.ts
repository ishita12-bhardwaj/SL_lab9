import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


imports:[
  BrowserModule
]


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  num1=12;
  num2=8;
  sum={};
  dif={};
  mult={};
  quo={};
  modulo={};
  check={}




add()
{
this.check=0;
this.sum=this.num1+this.num2;
}
sub()
{
this.check=1;
if(this.num1>this.num2)
{
this.dif=this.num1-this.num2;
}
else
{
this.dif=this.num2-this.num1;
}
}
mul()
{
this.check=2;
this.mult=this.num1*this.num2;
}
divi()
{
  this.check=3;
  this.quo=this.num1/this.num2;
}
  modu()
{
  this.check=4;
  this.modulo=this.num1%this.num2;
}
}

