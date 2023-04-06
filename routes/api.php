<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Categorycontroller;
use App\Http\Controllers\User\ApiComicController;
use App\Http\Controllers\User\ApiEpisodeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('category', [Categorycontroller::class, 'index']);
Route::get('comic', [ApiComicController::class, 'index']);
Route::get('comic/{comic}', [ApiComicController::class, 'show']);

Route::get('episodes', [ApiEpisodeController::class, 'index']);
Route::get('comic/{comic}/episodes', [ApiEpisodeController::class, 'show']);

Route::middleware('auth:api', 'role:user')->prefix('user')->name('user.')->group(function () {
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
