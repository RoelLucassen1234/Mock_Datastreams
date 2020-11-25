import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {ApiserviceService} from "../apiservice.service";
import { TestItem } from '../models/test-item';

@Component({
  selector: 'app-biemcomponent',
  templateUrl: './biemcomponent.component.html',
  styleUrls: ['./biemcomponent.component.css']
})
export class BiemcomponentComponent implements OnInit {
  test = new TestItem();
  constructor(private _snackBar: MatSnackBar, private apiservice: ApiserviceService) { }

  counter = 1;
  result: string = "";

  ngOnInit(): void {
  }

  openSnackBar() {
    this.apiservice.getTestresult().subscribe(data => {
      console.log("hey");
      this.test = data;
      this.snackbar();
      console.log(this.test);
    });
  
   
  }

  snackbar(){
    if(this.test.result.valueOf() == false){
      this.result = 'You are allowed to go inside. Tested negative';
    }else{
      this.result = 'You not allowed to go inside. Tested positive';
    }
  

    //get api response
    // this.apiservice.getTestresult('@@@@@@@@@@@@@@@@@').subscribe(
    //   res => {
    //     res = this.result;
    //   },
    //   err => console.log(err)
    // )

    //launch the snackbar (popup window thing that shows results)
    this._snackBar.open(this.result, 'End now', {
      duration: 15000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
