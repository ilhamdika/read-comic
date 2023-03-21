<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Comic;
use App\Models\CategoryComic;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Comic\ComicStore;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Admin\Comic\EditComic;


class ComicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        // $comics = Comic::with('category')->get();
        $comics = Comic::withTrashed()->orderBy('deleted_at')->get();
        $categories = CategoryComic::all();

        return inertia('Admin/Comic/Comic', [
            'comics' => $comics,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CategoryComic $category)
    {
        $category = CategoryComic::all();
        return inertia('Admin/Comic/AddComic', [
            'categorys' => $category
        ]);
        // return $category;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ComicStore $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('comic', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $comic = Comic::create($data);

        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Comic created successfully',
            'type' => 'success'
        ]);
        // return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function show(Comic $comic)
    {
        return $comic;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function edit(Comic $comic, CategoryComic $category)
    {
        return inertia('Admin/Comic/EditComic', [
            'comic' => $comic,
            'categorys' => $category->all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function update(EditComic $request, Comic $comic)
    {
        // $data = $request->validate([
        //     'name' => ['required', 'string', 'max:255'],
        //     'category_id' => ['required', 'integer'],
        //     'thumbnail' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
        //     'description' => ['required', 'string'],
        // ]);
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('comic', $request->file('thumbnail'));
            Storage::disk('public')->delete($comic->thumbnail);
        } else {
            $data['thumbnail'] = $comic->thumbnail;
        }
        // $comic->name = $data['name'];
        // $comic->category_id = $data['category_id'];
        // $comic->thumbnail = $data['thumbnail'];
        // $comic->description = $data['description'];
        // $comic->save();

        $comic->update($data);

        // return $request->all();

        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Comic updated successfully',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comic $comic)
    {
        $comic->delete();
        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Comic deleted successfully',
            'type' => 'success'
        ]);
    }

    public function restore($comic)
    {
        Comic::withTrashed()->find($comic)->restore();
        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Movie was deleted succesfully Restore',
            'type' => 'success'
        ]);
    }
}
