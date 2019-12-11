<?php

use Illuminate\Database\Seeder;
use App\Genre;

class GenresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = ['Horror', 'Mystery', 'Romance', 'Thriller' , 'Action', 'Adventure'];

        foreach($array as $a):
        Genre::create([
            'name' => $a
        ]);

        endforeach;

    }
}
