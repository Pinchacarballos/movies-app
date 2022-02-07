import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from '../components/loader/loader.component'
import { MaterialModule } from './material.module'
import { ToastService } from './toast.service'
import { MinToHoursPipe } from '../pipes/min-to-hours.pipe'

@NgModule({
  declarations: [LoaderComponent, MinToHoursPipe],
  imports: [CommonModule, MaterialModule],
  providers: [ToastService],
  exports: [LoaderComponent, MaterialModule, MinToHoursPipe]
})
export class SharedModule {}
