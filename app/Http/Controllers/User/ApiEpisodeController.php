<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Episode;
use App\Helpers\ApiFormater;
use App\Models\Comic;

class ApiEpisodeController extends Controller
{
    public function index()
    {
        $episodes = Episode::all();

        if ($episodes) {
            return ApiFormater::createApi($episodes, 'List of episodes', 200);
        } else {
            return ApiFormater::createApi(null, 'No episodes found', 404);
        }
    }

    public function show(Comic $comic)
    {
        $comic = Comic::find($comic->id);
        $episodes = Episode::where('comic_id', $comic->id)->get();

        if ($episodes) {
            return ApiFormater::createApi($episodes, 'List of episodes', 200);
        } else {
            return ApiFormater::createApi(null, 'No episodes found', 404);
        }
    }
}
