<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comic;
use App\Models\Episode;
use App\Helpers\ApiFormater;

class ApiComicController extends Controller
{
    public function index(Comic $comic)
    {
        $comic = Comic::all();


        if ($comic) {
            return ApiFormater::createApi($comic, 'List of comics', 200);
        } else {
            return ApiFormater::createApi(null, 'No comics found', 404);
        }
    }

    public function show(Comic $comic)
    {
        $comic = Comic::find($comic->id);


        if ($comic) {
            return ApiFormater::createApi($comic, 'Detail of comic', 200);
        } else {
            return ApiFormater::createApi(null, 'No comic found', 404);
        }

        $episodes = Episode::where('comic_id', $comic->id)->get();

        if ($episodes) {
            return ApiFormater::createApi($episodes, 'List of episodes', 200);
        } else {
            return ApiFormater::createApi(null, 'No episodes found', 404);
        }
    }
}
