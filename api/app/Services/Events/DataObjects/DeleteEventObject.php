<?php

namespace App\Services\Events\DataObjects;

use App\Models\Event;

class DeleteEventObject
{
    public function __construct(
        public readonly Event $event,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $event = Event::findOrFail($args['id']);

        return new static(
            event: $event,
        );
    }

    public function toArray()
    {
        return [
            'event' => $this->event,
        ];
    }
}
