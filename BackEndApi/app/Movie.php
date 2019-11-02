<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Actor;
class Movie extends Model
{
    public function actors()
    {
        return $this->belongsToMany(Actor::class);
    }
}
