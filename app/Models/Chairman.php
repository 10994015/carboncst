<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chairman extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['name', 'message_date', 'content', 'image', 'image_mime', 'image_size', 'hidden', 'created_by', 'updated_by'];

}