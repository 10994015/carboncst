<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Awardprogram extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['name','award_name','year', 'units', 'link', 'file_name', 'file', 'hidden', 'created_by', 'updated_by'];

}