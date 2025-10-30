import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from './services/snackbar';
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // constructor(private snackBar: MatSnackBar) { }

  // openSnackBar() {
  //   this.snackBar.open('Message sent successfully!', 'Close', {
  //     duration: 30000
  //   });
  // }

  // openSnackBar() {
  //   const snackBarRef = this.snackBar.open('Item deleted', 'Undo', {
  //     duration: 4000
  //   });

  //   // Listen for the action button click
  //   snackBarRef.onAction().subscribe(() => {
  //     this.undoDelete();
  //   });
  // }

  // openSnackBar() {
  //   this.snackBar.open('Data saved successfully!', 'Close', {
  //     duration: 5000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //     panelClass: ['error-snackbar']
  //   });
  // }

  // undoDelete() {
  //   this.snackBar.open('Item restored', '', { duration: 2000 });
  // }

  // constructor(private snackbarService: Snackbar) { }

  // showSuccess() {
  //   this.snackbarService.success('Data saved successfully!');
  // }

  // showError() {
  //   this.snackbarService.error('Failed to save data.');
  // }

  // showInfo() {
  //   this.snackbarService.info('This is an informational message.');
  // }

  constructor(
    private dataService: Data,
    private snackbarService: Snackbar
  ) { }

  fetchSuccess() {
    this.dataService.getDataSuccess().subscribe({
      next: (res: { message: string }) => this.snackbarService.success(res.message),
      error: () => this.snackbarService.error('Something went wrong!')
    });
  }

  fetchError() {
    this.dataService.getDataError().subscribe({
      next: (res: { message: string }) => this.snackbarService.success(res.message),
      error: (err: any) => this.snackbarService.error(err?.message ?? 'Unknown error')
    });
  }
}
