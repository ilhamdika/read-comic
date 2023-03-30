<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Comic\EpisodeStore;
use App\Http\Requests\Admin\Comic\EpisodeUpdate;
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
    public function index(Comic $comic)
    {
        $comic = Comic::find($comic->id);

        $episodes = Episode::all();
        return inertia('Admin/Comic/EpisodeComic', [
            'episodes' => $episodes,
            'comic' => $comic
        ]);
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
    public function edit(Episode $episode)
    {
        return inertia('Admin/Comic/EditEpisode', [
            'episode' => $episode,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * 
     * @return \Illuminate\Http\Response
     */
    public function update(EpisodeUpdate $request, Episode $episode)
    {
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('episode-thumbnail', $request->file('thumbnail'));
            Storage::disk('public')->delete($episode->thumbnail);
        } else {
            $data['thumbnail'] = $episode->thumbnail;
        }
        if ($request->file('file')) {
            $data['file'] = Storage::disk('public')->put('episode-file', $request->file('file'));
            Storage::disk('public')->delete($episode->file);
        } else {
            $data['file'] = $episode->file;
        }

        $episode->update($data);

        return redirect(route('admin.dashboard.comic.index'))->with([
            'message' => 'Episode updated successfully',
            'type' => 'success'
        ]);
        return $episode;
    }

    /**
     * Remove the specified resource from storage.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Episode $episode)
    {
        Storage::disk('public')->delete($episode->thumbnail);
        Storage::disk('public')->delete($episode->file);
        $episode->delete();
    }
}
