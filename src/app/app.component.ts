import { Component } from '@angular/core';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Tutorials';
  length = 100;
  b = 50;
  userlist: any;
  emplist: any;
  // result:any;
  constructor(private service: MasterService) {
    this.userlist = this.service.getUserdata()
    console.log(this.userlist)

    this.service.getEmployedata().subscribe((result: any) =>{
      this.emplist = result;
      console.log(this.emplist )
    });
  }

}
