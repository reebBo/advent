import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';

const routes: Routes = [
  {path:'',redirectTo:'calendar', pathMatch: 'full' },

  { path: 'calendar', component: CalendarComponent },
  { path: 'day', component: DayComponent }, 

 // otherwise redirect to calendar
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
