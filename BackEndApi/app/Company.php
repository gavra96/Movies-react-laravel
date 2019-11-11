<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public function movies()
    {
        return $this->hasMany(Movie::class);
    }
}
