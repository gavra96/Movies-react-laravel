<?php

use Illuminate\Database\Seeder;
use App\Movie;
use App\Genre;

class MovieRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $movies = Movie::all();
        $genres = Genre::all();
        foreach($movies as $movie){
            $movie->genres()->attach($genres->random());
            $movie->genres()->attach($genres->random());
        }
        
    }
}
