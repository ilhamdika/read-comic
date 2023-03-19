<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo as RelationsBelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Iluminar\Database\Eloquent\Relations\BelongsTo;

class Comic extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'comics';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'slug',
        'category_id',
        'thumbnail',
        'description',
    ];

    public function category(): RelationsBelongsTo
    {
        return $this->belongsTo(CategoryComic::class, 'category_id');
    }
}
