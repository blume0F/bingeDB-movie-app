import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  imageSizes = IMAGE_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;

  constructor(private route: ActivatedRoute, private movieservice: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }
  getMovieCredits(id: any) {
    this.movieservice.getMovieCredits(id).subscribe((res) => {
      this.movieCredits = res;
    });
  }
  getMovieImages(id: any) {
    this.movieservice.getMovieImages(id).subscribe((res) => {
      this.movieImages = res;
    });
  }

  getMovieVideos(id: any) {
    this.movieservice.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }

  getMovie(id: any) {
    this.movieservice.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  ngOnDestroy(): void {}
}
