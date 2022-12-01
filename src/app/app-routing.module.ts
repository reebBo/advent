import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChristmasDayComponent } from './components/christmas-day/christmas-day.component';
import { ContestComponent } from './components/contest/contest.component';
import { CraftComponent } from './components/craft/craft.component';
import { DayComponent } from './components/day/day.component';
import { MotherCornerComponent } from './components/mother-corner/mother-corner.component';
import { SongComponent } from './components/song/song.component';
import { StoryComponent } from './components/story/story.component';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },

  { path: 'calendar', component: CalendarComponent },
  { path: 'day', component: DayComponent },
  { path: 'christmas-day', component: ChristmasDayComponent },
  { path: 'story', component: StoryComponent },
  { path: 'song', component: SongComponent },
  { path: 'moms', component: MotherCornerComponent },
  { path: 'craft', component: CraftComponent }, 
  { path: 'contest', component: ContestComponent },
  // otherwise redirect to calendar
  { path: '**', redirectTo: 'CalendarComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
