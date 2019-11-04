<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Actor;
class Movie extends Model
{
    
    protected $fillable = ['movie', 'release_date'];

    public function actors()
    {
        return $this->belongsToMany(Actor::class);
    }
}
