<?php

namespace App\Http\Traits;
use App\Movie;
trait MovieTrait {
    
    public function movieSearch($movieQueryParam)
    {
        $movie = Movie::where('movie', 'like', '%' . $movieQueryParam . '%')->get();
        return $movie;
    }

    public function getTopViewedMovies($limit = 3)
    {
        return Movie::with(['user', 'genres'])->orderBy('views', 'DESC')->take($limit)->get();
    }
}