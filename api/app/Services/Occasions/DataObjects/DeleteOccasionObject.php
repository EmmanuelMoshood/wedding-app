<?php

namespace App\Services\Occasions\DataObjects;

use App\Models\Occasion;

class DeleteOccasionObject
{
    public function __construct(
        public readonly Occasion $event,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $event = Occasion::findOrFail($args['id']);

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
