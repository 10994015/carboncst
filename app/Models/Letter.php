<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Letter extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['name', 'file', 'file_mime', 'file_size', 'hidden', 'created_by', 'updated_by'];

}