import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyfirstApp';
  firstname="mirza kaleem"
  Lastname="baig"
  value="dacdsf";
    email="";

 country=[
{id:1,name:"test"},
{id:2,name:"test2"},
{id:3,name:"test3"},

 ]

  clickCount=0;
 Clickcnt()
{
  this.clickCount++;
}


GetValue(args:any)
{
      console.log(args);
     console.log("name1Changed " + args.target.value);
}


handle(event:any)
{
 this.value=(event.target as HTMLInputElement).value;
  
}

}


