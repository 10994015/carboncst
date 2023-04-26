<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OverseaRequest extends FormRequest
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
            'title'=> ['required', 'max:2000'],
            'link'=> ['nullable', 'max:2000'],
            'image'=> ['nullable', 'image'],
            'content'=> ['nullable', 'string', 'required'],
            'hidden'=> ['boolean'],
            'imagesNum' =>['nullable'],
            'ori_images' =>['nullable'],
            'images0'=> ['nullable', 'image'],
            'images1'=> ['nullable', 'image'],
            'images2'=> ['nullable', 'image'],
            'images3'=> ['nullable', 'image'],
            'images4'=> ['nullable', 'image'],
            'images5'=> ['nullable', 'image'],
            'images6'=> ['nullable', 'image'],
            'images7'=> ['nullable', 'image'],
            'images8'=> ['nullable', 'image'],
            'images9'=> ['nullable', 'image'],
            'images10'=> ['nullable', 'image'],
            'images11'=> ['nullable', 'image'],
            'images12'=> ['nullable', 'image'],
            'images13'=> ['nullable', 'image'],
            'images14'=> ['nullable', 'image'],
            'images15'=> ['nullable', 'image'],
            'images16'=> ['nullable', 'image'],
            'images17'=> ['nullable', 'image'],
            'images18'=> ['nullable', 'image'],
            'images19'=> ['nullable', 'image'],
            'images20'=> ['nullable', 'image'],
        ];
    }
}