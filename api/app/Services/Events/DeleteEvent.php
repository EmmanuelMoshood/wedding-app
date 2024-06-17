<?php

namespace App\Services\Events;

use App\Models\Event;
use App\Services\Events\DataObjects\DeleteEventObject;

class DeleteEvent
{
    public function __construct(
        protected DeleteEventObject $object
    ) {
        //
    }

    public function fromObject(DeleteEventObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Delete user.
     *
     * @param  array  $input
     */
    public function run(): Event
    {
        $this->object
            ->event
            ->delete();

        return $this->object->event;
    }
}
