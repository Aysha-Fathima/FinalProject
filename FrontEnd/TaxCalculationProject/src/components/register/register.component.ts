import { Component } from '@angular/core';
import { ConnectService } from '../../service/connect.service';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatFormField,MatInput,MatSelect,MatDatepickerModule,MatLabel,MatOption,MatDatepickerToggle,MatNativeDateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  obj : ConnectService;

  constructor(a:ConnectService){this.obj=a;}
}
