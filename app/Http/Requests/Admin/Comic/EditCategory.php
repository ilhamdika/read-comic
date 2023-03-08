<?php

namespace App\Http\Requests\Admin\Comic;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\CategoryComic;

class EditCategory extends FormRequest
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
    public function rules(CategoryComic $category)
    {
        return [
            'name' => 'required|unique:category_comics,name,' . $category->id,
        ];
    }
}
