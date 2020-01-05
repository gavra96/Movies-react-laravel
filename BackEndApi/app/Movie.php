<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Actor;
use App\User;
use App\Genre;
use App\Company;
class Movie extends Model
{
    
    protected $fillable = [
        'movie',
        'release_date',
        'main_image',
        'time_in_secounds',
        'description',
        'language',
        'company_id',
        'views'
    ];

    public function actors()
    {
        return $this->belongsToMany(Actor::class);
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function Company()
    {
        return $this->belongsTo(Company::class);
    }

    public function getMovieSlugAttribute()
    {
        return str_slug($this->movie);
    }



    
}
