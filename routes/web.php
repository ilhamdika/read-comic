<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ComicController;
use App\Http\Controllers\Admin\EpisodeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::redirect('/', '/login');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::put('category/{category}/restore', [CategoryController::class, 'restore'])->name('category.restore');
    Route::resource('category', CategoryController::class);
    Route::put('comic/{comic}/restore', [ComicController::class, 'restore'])->name('comic.restore');
    Route::resource('comic', ComicController::class);
    // Route::resource('episodes', EpisodeController::class);
    //Route Episode
    Route::get('/comic/{id}/episodes', [EpisodeController::class, 'index'])->name('episodes.index');
    Route::get('/comic/{id}/episodes/create', [EpisodeController::class, 'create'])->name('episodes.create');
    Route::post('/episodes', [EpisodeController::class, 'store'])->name('episodes.store');
    Route::get('/episodes/{episode}/edit', [EpisodeController::class, 'edit'])->name('episodes.edit');
    Route::put('/episodes/{episode}', [EpisodeController::class, 'update'])->name('episodes.update');
    Route::delete('/episodes/{episode}', [EpisodeController::class, 'destroy'])->name('episodes.destroy');

    // Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    //     ->name('logout');

    route::get('dashboard', function () {
        return Inertia::render('Admin/Comic/Dashboard');
    })->name('index');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    route::get('dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
    route::get('category', function () {
        return Inertia::render('Prototype/Category');
    })->name('category');
    route::get('add-category', function () {
        return Inertia::render('Prototype/CategoryAdd');
    })->name('add-category');
    route::get('comic', function () {
        return Inertia::render('Prototype/Comic');
    })->name('comic');
    route::get('add-comic', function () {
        return Inertia::render('Prototype/ComicAdd');
    })->name('add-comic');

    route::get('landing-user', function () {
        return Inertia::render('Prototype/LandingPageUser');
    })->name('landing-user');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
