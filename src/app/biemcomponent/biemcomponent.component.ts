import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {ApiserviceService} from "../apiservice.service";

@Component({
  selector: 'app-biemcomponent',
  templateUrl: './biemcomponent.component.html',
  styleUrls: ['./biemcomponent.component.css']
})
export class BiemcomponentComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private apiservice: ApiserviceService) { }

  counter = 1;
  result: string = "";

  ngOnInit(): void {
  }

  openSnackBar() {
    //alternate between true/false
    if (this.counter === 1) {
      this.result = 'Positive';
      this.counter = 2;
    } else if (this.counter === 2){
      this.result = 'Negative';
      this.counter = 3;
    } else {
      this.result = 'No valid test';
      this.counter = 1;
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
