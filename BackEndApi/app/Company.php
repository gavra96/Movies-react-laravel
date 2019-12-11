<?php

namespace App;
use App\Movie;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{

    protected $fillable = ['name', 'co_details', 'phone_number'];
    

    public function movies()
    {
        return $this->hasMany(Movie::class);
    }
}
