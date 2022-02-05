import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string) {
    this.snackBar.open(message, undefined, {
      panelClass: 'toast-error',
      duration: 3500
    })
  }
}
