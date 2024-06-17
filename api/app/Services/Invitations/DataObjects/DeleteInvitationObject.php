<?php

namespace App\Services\Invitations\DataObjects;

use App\Models\Invitation;

class DeleteInvitationObject
{
    public function __construct(
        public readonly Invitation $event,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $event = Invitation::findOrFail($args['id']);

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
