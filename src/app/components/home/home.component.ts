import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topratedMovies: Movie[] = [];
  nowplayingMovies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((res) => {
      this.popularMovies = res;
    });

    this.movieService.getMovies('top_rated').subscribe((res) => {
      this.topratedMovies = res;
    });

    this.movieService.getMovies('upcoming').subscribe((res) => {
      this.upcomingMovies = res;
    });

    this.movieService.getMovies('now_playing').subscribe((res) => {
      this.nowplayingMovies = res;
    });
  }
}
