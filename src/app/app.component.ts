import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
        
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Tour Of Heroes';
}