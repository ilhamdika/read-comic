<?php

namespace App\Http\Requests\Admin\Comic;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Episode;

class EpisodeUpdate extends FormRequest
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
    public function rules(Episode $episode)
    {
        return [
            'episode' => 'nullable|string' . $episode->id,
            'title' => 'nullable|string',
            'thumbnail' => 'nullable|image',
            'description' => 'nullable|string',
            'file' =>  'nullable|mimes:pdf,doc,docx,zip,rar',

        ];
    }
}
