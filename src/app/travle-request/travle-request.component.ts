import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-travle-request',
  templateUrl: './travle-request.component.html',
  styleUrls: ['./travle-request.component.css']
})
export class TravleRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  travelNum:number  = 0;
  total:number = 0;

  cal():void{
    this.total = this.travelNum*150;
  }

}
