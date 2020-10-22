import {Component} from '@angular/core'

@Component({
    selector:'app-little-tour',
    template:`
    <input #newCity 
    (keyup.enter) = "addCity(newCity.value); newCity.value=''" 
    (blur)="addCity(newCity.value); newCity.value=''">
    <button (click)="addCity(newCity.value)">Add</button>
    <ul><li *ngFor ="let city of cities"> {{city}} </li></ul>
    `
})

export class littleTour {
    cities = ['blr','chn'];
    addCity(newCity:string){
        if(newCity){
            this.cities.push(newCity);
        }
        
    }
}