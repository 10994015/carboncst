<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CstDatabase extends Model
{
    use HasFactory;

    protected $table = "cst_databases";

    protected $fillable = ['name', 'units', 'job_title', 'field', 'button_1', 'link_1','button_2', 'link_2','button_3', 'link_3','button_4', 'link_4','button_5', 'link_5', 'hidden', 'created_by', 'updated_by'];

}