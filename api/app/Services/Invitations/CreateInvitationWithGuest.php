<?php

namespace App\Services\Invitations;

use App\Enums\RSVPStatus;
use App\Models\Guest;
use App\Models\Invitation;
use App\Services\Invitations\DataObjects\CreateInvitationWithGuestObject;
use Illuminate\Support\Collection;

class CreateInvitationWithGuest
{
    protected CreateInvitationWithGuestObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(CreateInvitationWithGuestObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create Invitation with Guest.
     *
     * @param  array  $input
     */
    public function run(): Guest
    {
        $guest = Guest::updateOrCreate(
            ['email' => $this->object->email, 'user_id' => $this->object->occasion->user_id],
            $this->object->toGuestArray()
        );

        $events = Collection::make($this->object->events);
        $events->each(function ($event) use ($guest) {
            Invitation::updateOrCreate([
                'event_id' => $event,
                'guest_id' => $guest->getKey(),
            ], [
                'rsvp_status' => $this->object->rsvpStatus,
                'rsvped_at' => $this->object->rsvpStatus !== RSVPStatus::UNKNOWN ? now() : null,
            ]);
        });

        return $guest;
    }
}
