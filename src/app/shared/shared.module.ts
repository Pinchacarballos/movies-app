import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from '../components/loader/loader.component'
import { MaterialModule } from './material.module'
import { ToastService } from './toast.service'

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MaterialModule],
  providers: [ToastService],
  exports: [LoaderComponent, MaterialModule]
})
export class SharedModule {}
