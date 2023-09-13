import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SharedModule } from './shared/shared.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GenresComponent } from './components/movie-details/genres/genres.component';
import { RatingComponent } from './components/movie-details/rating/rating.component';
import { OverviewComponent } from './components/movie-details/overview/overview.component';
import { ReleaseDateComponent } from './components/movie-details/release-date/release-date.component';
import { CreatorsComponent } from './components/movie-details/creators/creators.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent,
    RatingComponent,
    OverviewComponent,
    ReleaseDateComponent,
    CreatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
