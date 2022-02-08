import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from '../components/loader/loader.component'
import { MaterialModule } from './material.module'
import { ToastService } from './toast.service'
import { MinToHoursPipe } from '../pipes/min-to-hours.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoaderComponent, MinToHoursPipe],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [ToastService],
  exports: [
    LoaderComponent,
    MaterialModule,
    MinToHoursPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
