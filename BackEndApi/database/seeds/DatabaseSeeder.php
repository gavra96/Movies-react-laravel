<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesTableSeeder::class);
        $this->call(GenresTableSeeder::class);
        factory(App\User::class, 5)->create();
        factory(App\Company::class, 3)->create();
        factory(App\Movie::class, 5)->create();
        factory(App\Actor::class, 40)->create();
        $this->call(MovieRolesSeeder::class);



         
    }
}
