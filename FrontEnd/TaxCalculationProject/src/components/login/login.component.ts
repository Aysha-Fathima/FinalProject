import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectService } from '../../service/connect.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  obj : ConnectService;
  constructor(a:ConnectService,private router:Router){this.obj=a;}

  login(data:any){
    this.obj.login(data).subscribe((data)=>{
      if(data){
        this.obj.setAuth(true);
        this.router.navigate(['/taxcalculator']);
        this.obj.getTaxDetails(data);
      }
      else{
        alert('Invalie email or password');
      }
    });
  }
}
