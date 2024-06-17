<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invitation extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id', 'id');
    }
}
