<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AwardprogramRequest extends FormRequest
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
            'award_name'=> ['required', 'max:2000'],
            'name'=> ['required', 'max:2000'],
            'link'=> ['nullable', 'max:2000'],
            'units'=> ['required', 'max:2000'],
            'year'=> ['required'],
            'hidden'=> ['boolean'],
            'file'=>['nullable'],
            'file_name'=>['nullable', 'max:2000']
        ];
    }
}