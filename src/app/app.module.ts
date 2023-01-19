import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChristmasDayComponent } from './components/christmas-day/christmas-day.component';
import { MotherCornerComponent } from './components/mother-corner/mother-corner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { StoryComponent } from './components/story/story.component';
import { CraftComponent } from './components/craft/craft.component';
import { SongComponent } from './components/song/song.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContestComponent } from './components/contest/contest.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    StoryComponent,
    CountdownComponent,
    ChristmasDayComponent,
    CraftComponent,
    SongComponent,
    MotherCornerComponent,
    FooterComponent,
    ReplacePipe,
    NavbarComponent,
    ContestComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
