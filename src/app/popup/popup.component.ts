import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

constructor(private service:MasterService){}

  savedata(userId:string){
    this.service.savedata(userId)
    console.log(userId)
    // alert('a')
  }
}
