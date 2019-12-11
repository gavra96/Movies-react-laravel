<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Company;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'name' => $faker->company(),
        'co_details' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'phone_number' => $faker->phoneNumber()
    ];
});
