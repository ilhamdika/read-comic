<?php

namespace App\Providers;

use Illuminate\Support\ServiceProviDer;
use Inertia\Inertia;
use Illuminate\Http\Request;

class InertiaServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::sahre('app.name', config('app.name'));
        Inertia::share('auth.user', function (Request $request) {
            return $request->user();
        });

        $this->app->make('Illuminate\Contracts\Http\Kernel')->prepenMiddleware(\Barryvdh\Cors\HandleCors::class);
    }
}
