import {Component, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgOptimizedImage } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef, MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Darbari';
  public enter: number = 0;
  public yesCounter: number = 1;
  public noCounter: number = 1;
  public ArrayOfImages: string[] =  ['assets/garvit-whine.jpg', 'assets/sad-garvit.jpg', 'assets/sundar-garvit.jpg'];
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
  }

ngOnInit() {
  this.enter = 0;
   this.yesCounter = 1;
    this.noCounter = 1;
  }

  onClick() {
    this.enter++;
  }

  openSnackBar() {
    this._snackBar.open('Wrong Person! You are not allowed here', 'Close');
  }

  onExit() {
    this._snackBar.open(` You are not allowed to Exit! you are stuck here forever`, 'Okay');
  }

  onYes() {
    if (this.yesCounter === 1) {
      this.onMsg();
    this.yesCounter++;
      } else {
        this.dialog.open(DialogOverviewExampleDialog, {
                  height: '31 0px',
                  width: '375px',
                  data: {
                    msg: "Yayyyy!! Congratulations, aap jeet gye ho mauka is sundar ladke ka valentine ban ne ka. J.K. I am really grateful and luckiest to have you as my valentine",
                    mood: this.ArrayOfImages[2]
                    }
                });
        }
  }

  onNo() {
    this.noCounter++;
    this.yesCounter = 2;
  }

  onNoFinal() {
    this.noCounter++;
    this.yesCounter = -1;
    this.dialog.open(DialogOverviewExampleDialog, {
          height: '31 0px',
          width: '375px',
          data: {
            msg: "Tum nahi maan ne wale na, ruko tum",
            mood: this.ArrayOfImages[1]
            }
        });
  }

  onYesFinal() {
    this.yesCounter = -1;
    this.dialog.open(DialogOverviewExampleDialog, {
          height: '31 0px',
          width: '375px',
          data: {
            msg: "Yayyyy!! Congratulations, aap jeet gye ho mauka is sundar ladke ka valentine ban ne ka. J.K. I am really grateful and luckiest to have you as my valentine",
            mood: this.ArrayOfImages[2]
            }
        });
  }

  onMsg() {
    this.dialog.open(DialogOverviewExampleDialog, {
      height: '31 0px',
      width: '375px',
      data: {
        msg: "Pehli baari me kaun Yes bolta hai, itni mehnat kri hai, No click kro, jao",
        mood: this.ArrayOfImages[0]
        }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog implements OnInit {
  @ViewChild('img1') imgComp!: HTMLImageElement;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  msg: string = "";
  mood: string = "";
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  this.msg = this.data.msg;
  this.mood = this.data.mood;
  this.imgComp.src = this.mood;
  console.log(this.imgComp)
  }
}
