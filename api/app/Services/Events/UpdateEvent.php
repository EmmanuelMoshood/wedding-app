<?php

namespace App\Services\Events;

use App\Models\Event;
use App\Services\Events\DataObjects\UpdateEventObject;

class UpdateEvent
{
    protected UpdateEventObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(UpdateEventObject $object)
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
        $this->object
            ->event
            ->update($this->object->toArray());

        if ($this->object->invite) {
            $this->object->event->updateImageAsset($this->object->invite);
        }

        return $this->object->event->refresh();
    }
}
