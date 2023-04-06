<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class CstSeminar extends Model
{
    use HasFactory;
    

    protected $fillable = ['title', 'link', 'content', 'image', 'image_mime', 'image_size', 'hidden', 'created_by', 'updated_by'];

}