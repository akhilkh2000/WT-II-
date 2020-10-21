import {Component} from '@angular/core';
@Component({
    selector:'app-click-me',
    template:
})

export class ClickMeComponent{
    clickMessage = "";
    onClickMe(){
        this.clickMessage = "Welcome to PES"
    }
}