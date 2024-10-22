import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserData {
  userId?: number;
  userName?: string;
  panCardNumber?: string;
  gender?: string;
  mobileNumber?: string;
  email?: string;
  userAddress?: string;
  dateOfBirth?: Date;
  age?: number;
}


export interface TaxAssessment {
  assessmentYear?: number;
  incomeSalary?: number;
  incomeFromProperty?: number;
  municipalTaxPaid?: number;
  shortTermCapitalGains?: number;
  longTermCapitalGains?: number;
  otherBankInterest?: number;
  otherWinLottery?: number;
  grossTotalIncome?: number;
  totalDeduction?: number;
  advanceTaxPaid?: number;
}


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  _http:HttpClient;
  constructor(a:HttpClient) {this._http=a;}
  isAuthenticated = false;
  

  getUser(){console.log("got user");}

  reg : UserData={};
  register(formData: any) {
    this.reg = formData.value; // Extract the form data
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this._http.post('https://localhost:7205/api/UserDatums', JSON.stringify(this.reg), { headers }).subscribe(
      (response) => {
        console.log('Registration successful:', response); // Handle success
      },
      (error) => {
        console.error('Error during registration:', error); // Handle error
      }
    );
  }
  
  login(formData:any){
    console.log(formData.value);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post('https://localhost:7205/api/UserDatums/login',JSON.stringify(formData.value),{ headers });
  }

  setAuth(isAuth: boolean) {
    this.isAuthenticated = isAuth;
  }

  logout(){
    this.isAuthenticated = false;
  }

  userTaxData : TaxAssessment = {};
  getTaxDetails(userId:any){
    this._http.get<TaxAssessment>("https://localhost:7205/api/TaxInfoes/"+101).subscribe((data)=>{
      this.userTaxData = data;
      console.log(this.userTaxData);
    })
    
  }
}
