<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    
    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
