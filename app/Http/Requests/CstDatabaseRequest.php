<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CstDatabaseRequest extends FormRequest
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
            'name'=> ['required', 'max:2000'],
            'units'=> ['required', 'max:2000'],
            'job_title'=> ['required', 'max:2000'],
            'field'=> ['required', 'max:2000'],
            'button_1'=> ['nullable'],
            'link_1'=> ['max:2000'],
            'button_2'=> ['nullable'],
            'link_2'=> [ 'max:2000'],
            'button_3'=> ['nullable'],
            'link_3'=> [ 'max:2000'],
            'button_4'=> ['nullable'],
            'link_4'=> [ 'max:2000'],
            'button_5'=> ['nullable'],
            'link_5'=> [ 'max:2000'],
            'hidden'=> ['boolean'],
        ];
    }
}