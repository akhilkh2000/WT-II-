import {Component} from '@angular/core';
@Component({
    selector:'app-click-me',
    template:`
    <h1> Pls click here </h1>
    <button (click) = "onClickMe()">Click Me </button>
    {{clickMessage}}  
    `
    //{{}} //parameters are passed as thats how we will print variables in angular to the template
})

export class ClickMeComponent{
    clickMessage = "";
    onClickMe(){
        this.clickMessage = "Welcome to PES"
    }
}