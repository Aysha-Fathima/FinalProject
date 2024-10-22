import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  calculatedTotalTax:number=0;
  calculatedBalanceTax:number=0;
  
  submitAssessmentForm(formsdata: NgForm) {
    console.log(formsdata)
    if (formsdata.valid) {
      const {
        incomeSalary = 0,
        incomeFromProperty = 0,
        shortTermCapitalGains = 0,
        longTermCapitalGains = 0,
        otherBankInterest = 0,
        otherWinLottery = 0,
        totalDeduction = 0,
        advanceTaxPaid = 0,
      } = formsdata.value;
  
      const grossTotalIncome =
        Number(incomeSalary) +
        Number(incomeFromProperty) +
        Number(shortTermCapitalGains) +
        Number(longTermCapitalGains) +
        Number(otherBankInterest) +
        Number(otherWinLottery);
  
      this.obj.userTaxData.grossTotalIncome = grossTotalIncome;
  
      const taxableIncome = grossTotalIncome - Number(totalDeduction);
  
      const taxRate = 0.05;
      const totalTax = taxableIncome * taxRate;
  
      const balanceTax = totalTax - Number(advanceTaxPaid);
  
      console.log('Total Tax:', totalTax);
      console.log('Balance Tax:', balanceTax);
  
      this.calculatedTotalTax = totalTax;
      this.calculatedBalanceTax = balanceTax;
    }
  }
}
