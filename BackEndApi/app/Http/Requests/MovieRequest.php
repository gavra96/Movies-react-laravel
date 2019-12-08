<?php

namespace App\Http\Requests;
use App\Movie;
use Response;
use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
{

    
    public function uploadMovieImage()
    {
        $uploadedImage = $this->main_image;
        $this->filename = str_slug($this->movie) . time() . '.' . $uploadedImage->getClientOriginalExtension();
        $uploadedImage->storePubliclyAs('public/movies/'. $this->filename, null);
        return $this;

    }
  
}
