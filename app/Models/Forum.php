<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Forum extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['title', 'content', 'button_1', 'link_1', 'button_2', 'link_2', 'button_3', 'link_3', 'button_4', 'link_4', 'button_5', 'link_5', 'image', 'image_mime', 'image_size', 'hidden', 'created_by', 'updated_by'];
}