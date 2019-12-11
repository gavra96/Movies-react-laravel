<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\User;
use App\Company;
use App\Movie;


$factory->define(Movie::class, function (Faker $faker) {
    return [
        'movie' => $faker->words($nb = 3, $asText = true),
        'release_date' => $faker->date($format = 'Y-m-d'),
        'main_image' => 'neki-tamo-aaaaa1575664959.jpg',
        'time_in_secounds' => rand( 60 , 200 ),
        'description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'language' => 'English',
        'user_id' => function () {
            return User::all()->random();
            },
        'company_id' => function () {
            return Company::all()->random();
            },
        'views' =>  rand( 1 , 2000 )
    ];
});
