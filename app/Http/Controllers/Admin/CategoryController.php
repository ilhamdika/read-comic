<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryComic;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Comic\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Admin/Comic/Category');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Comic/CreateCategory');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Category $request)
    {
        $data = $request->validated();
        CategoryComic::create($data);
        return redirect(route('admin.dashboard.category.index'))->with([
            'message' => 'Category created successfully',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryComic $categoryComic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryComic $categoryComic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryComic $categoryComic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryComic $categoryComic)
    {
        //
    }
}
