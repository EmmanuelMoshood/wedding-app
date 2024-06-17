<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Guest extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function invites()
    {
        return $this->belongsToMany(Invite::class, 'event_guest_invite', 'guest_id', 'invite_id');
    }
}
