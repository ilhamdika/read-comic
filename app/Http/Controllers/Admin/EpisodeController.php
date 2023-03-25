<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Comic\EpisodeStore;
use App\Models\Episode;
use App\Models\Comic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EpisodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id, Comic $comic)
    {
        $comic = Comic::find($id);

        return inertia('Admin/Comic/AddEpisode', [
            'comic' => $comic
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EpisodeStore $request, Episode $episode)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('episode-thumbnail', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['title']);
        $data['comic_id'] = $request->comic_id;
        $data['file'] = Storage::disk('public')->put('episode-file', $request->file('file'));

        Episode::create($data);


        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Comic created successfully',
            'type' => 'success'
        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
