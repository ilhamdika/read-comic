<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CategoryComic;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categoryComic = [
            [
                'name' => 'Action',
            ],
            [
                'name' => 'Adventure',
            ],
            [
                'name' => 'Comedy',
            ]
        ];
        CategoryComic::insert($categoryComic);
    }
}
