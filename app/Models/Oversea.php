<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Oversea extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['title', 'link', 'content', 'image', 'image_mime', 'image_size', 'images', 'hidden', 'created_by', 'updated_by'];
}