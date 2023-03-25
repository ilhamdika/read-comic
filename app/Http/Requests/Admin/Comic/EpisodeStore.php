<?php

namespace App\Http\Requests\Admin\Comic;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EpisodeStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'episode' => 'required|string',
            'title' => 'required|string',
            'thumbnail' => 'required|image',
            'description' => 'required|string',
            'file' =>  'required|mimes:pdf,doc,docx,zip,rar',

        ];
    }
}
