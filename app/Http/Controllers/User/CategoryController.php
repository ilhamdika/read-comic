<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryComic;
use App\Helpers\ApiFormater;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryComic::all();

        if ($categories) {
            return ApiFormater::createApi($categories, 'List of categories', 200);
        } else {
            return ApiFormater::createApi(null, 'No categories found', 404);
        }
    }
}
