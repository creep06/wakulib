<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    // この本を登録したユーザーを返す
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
