<?php

namespace App\Services\Events;

use App\Models\Event;
use App\Services\Events\DataObjects\CreateEventObject;

class CreateEvent
{
    protected CreateEventObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(CreateEventObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create user.
     *
     * @param  array  $input
     */
    public function run(): Event
    {
        /** @var Event $event */
        $event = Event::create($this->object->toArray());

        if ($this->object->invite) {
            $event->updateImageAsset($this->object->invite);
        }

        return $event;
    }
}
