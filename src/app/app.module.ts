import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule  } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeroDetailComponent, HeroComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'heroes', component: HeroComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ])],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
