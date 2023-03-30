<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryComic;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Comic\Category;
use App\Http\Requests\Admin\Comic\EditCategory;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = CategoryComic::withTrashed()->orderBy('deleted_at')->get();
        return inertia('Admin/Comic/Category', [
            'categories' => $categories
        ]);
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
    public function edit(CategoryComic $category)
    {
        return inertia('Admin/Comic/EditCategory', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function update(EditCategory $request, CategoryComic $category)
    {
        // $data = $request->validated();
        // $categoryComic->update($data);


        $data = $request->validated();
        $category->update($data);

        return redirect(route('admin.dashboard.category.index'))->with([
            'message' => 'Category updated successfully',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryComic  $categoryComic
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryComic $category)
    {
        $category->delete();
        return redirect(route('admin.dashboard.category.index'))->with([
            'message' => 'Category deleted successfully',
            'type' => 'success'
        ]);
    }

    public function restore($category)
    {
        CategoryComic::withTrashed()->find($category)->restore();
        return redirect(route('admin.dashboard.category.index'))->with([
            'message' => 'Category restored successfully',
            'type' => 'success'
        ]);
    }
}
