<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Actor;

$factory->define(Actor::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName(),
        'surname' => $faker->lastName(),
        'born_at' => $faker->date($format = 'Y-m-d', $max = 'now')
    ];
});
