import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectService } from '../../service/connect.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.css'
})
export class TaxCalculatorComponent {
  obj : ConnectService;
  constructor(a:ConnectService){this.obj=a;}

  submitAssessmentForm(a:any){
    console.log('hello');
  }
}
