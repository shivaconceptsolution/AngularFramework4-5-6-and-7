import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Truck } from '../truck';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {HeroesComponent} from '../heroes/heroes.component';

const endpoint = 'https://shivaconceptsolution.com/webservices/showreg.php';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
 
})

export class ConfigComponent implements OnInit{
  result;
  tid:string='';
  tdesc:string='';
  private locations  = []
  title = 'HTTP Services';
   constructor(private http: HttpClient) {
       
       
  }
  @ViewChild(HeroesComponent) alert: HeroesComponent;

  showAlert() {
    this.alert.fun();
  }
 ngOnInit() {
  
    //   this.addTruck({'tno':'1111','tdet':'test'});
   //    alert("data inserted successfully1"); 
    this.getLoc();
  }
getLoc(){
        this.http.get(endpoint).subscribe((res)=>{
            console.log(res);
           // this. = res;
        });
    }
 
  
addTruck () {
    let t = {'tno':this.tid,'tdet':this.tdesc};
  return this.http.post("https://shivaconceptsolution.com/webservices/truck.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
  alert("data inserted successfully2");  
}
  
 

}

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}
