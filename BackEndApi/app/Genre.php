<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = ['name'];
    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
