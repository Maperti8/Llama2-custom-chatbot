import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



const materialComponents = [
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule {}