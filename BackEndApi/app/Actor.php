<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $fillable = ['name', 'surname', 'born_at', 'died_at'];

    protected $hidden = ['pivot'];
    
    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
