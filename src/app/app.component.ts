import {Component, Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgOptimizedImage } from '@angular/common'
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
export class AppComponent {
  title = 'Darbari';
  public name: string = '';
  public enter: boolean = false;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  onClick() {
    if (this.name.toUpperCase() === 'MANASVI' || this.name.toUpperCase() === 'DARBARI' || this.name.toUpperCase() === 'MANASVI DARBARI') {
      this.enter = true;
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Wrong Person! You are not allowed here', 'Close');
  }

  onExit() {
    this._snackBar.open(`${this.name}, You are not allowed to Exit! you are stuck here forever`, 'Okay');
  }

  onMsg() {
    this.dialog.open(DialogOverviewExampleDialog, {
      height: '310px',
      width: '375px'
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
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
