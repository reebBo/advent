import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChristmasDayComponent } from './components/christmas-day/christmas-day.component';
import { DayComponent } from './components/day/day.component';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },

  { path: 'calendar', component: CalendarComponent },
  { path: 'day', component: DayComponent },
  { path: 'christmas-day', component: ChristmasDayComponent },
  // otherwise redirect to calendar
  { path: '**', redirectTo: 'CalendarComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
