<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends MovieRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'movie' => 'required|max:100',
            'release_date' => 'required|date',
            'main_image' => 'image',
            'time_in_secounds' => 'integer',
            'description' => 'required|max:750',
            'language' => 'string|max:30',
            'company_id' => 'required|exists:companies,id'
        ];
    }


    public function updateMovie($movie)
    {
        if($this->hasFile('main_image')){
            $this->uploadMovieImage();
            $movie->main_image = $this->filename;
        }
        $movie->movie = $this->movie;
        $movie->release_date = $this->release_date;
        $movie->time_in_secounds = $this->time_in_secounds;
        $movie->description = $this->description;
        $movie->language = $this->language;
        $movie->company_id = $this->company_id;
        $movie->save();
        return $this;
    }
}
