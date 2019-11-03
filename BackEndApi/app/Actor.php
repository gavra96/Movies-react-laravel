<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $hidden = ['pivot'];
    
    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
