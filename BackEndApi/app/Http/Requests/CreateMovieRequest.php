<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateMovieRequest extends MovieRequest
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
            'main_image' => 'required|image',
            'time_in_secounds' => 'integer',
            'description' => 'required|max:750',
            'language' => 'string|max:30',
            'company_id' => 'required|exists:companies,id'
        ];
    }

    public function createMovie()
    {
        $this->movie = [
            'movie' => $this->movie,
            'release_date' => $this->release_date,
            'main_image' => $this->filename,
            'time_in_secounds' => $this->time_in_secounds,
            'description' => $this->description,
            'language' => $this->language,
            'company_id' => $this->company_id
        ];
        auth()->user()->movies()->create($this->movie);
        return $this; 
        
    }
}
