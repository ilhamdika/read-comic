<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    use HasFactory;

    protected $fillable = [
        'comic_id',
        'episode',
        'title',
        'slug',
        'thumbnail',
        'description',
        'file',
    ];

    public function comic()
    {
        return $this->belongsTo(Comic::class, 'comic_id');
    }
}
