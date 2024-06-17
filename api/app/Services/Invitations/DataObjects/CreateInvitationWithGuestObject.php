<?php

namespace App\Services\Invitations\DataObjects;

use App\Enums\RSVPStatus;
use App\Models\Occasion;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class CreateInvitationWithGuestObject
{
    public function __construct(
        public readonly string $title,
        public readonly string $firstName,
        public readonly string $lastName,
        public readonly string $email,
        public readonly ?string $phone,
        public readonly array $events,
        public readonly RSVPStatus $rsvpStatus,
        public readonly Occasion $occasion,
    ) {
        //
    }

    public static function fromGraphql(Occasion $occasion, array $args)
    {
        return new static(
            title: Arr::get($args, 'title', ''),
            firstName: Arr::get($args, 'firstName', ''),
            lastName: Arr::get($args, 'lastName', ''),
            email: Arr::get($args, 'email', ''),
            phone: Arr::get($args, 'phone', ''),
            rsvpStatus: Arr::get($args, 'rsvpStatus', RSVPStatus::UNKNOWN),
            events: Arr::get($args, 'events', []),
            occasion: $occasion,
        );
    }

    public function toGuestArray()
    {
        return [
            'uuid' => Str::uuid(),
            'title' => $this->title,
            'first_name' => $this->firstName,
            'last_name' => $this->lastName,
            'email' => $this->email,
            'phone' => $this->phone,
            'user_id' => $this->occasion->user_id,
        ];
    }

    public function toInvitationArray()
    {
        return [
            'events' => $this->events,
            'rsvpStatus' => $this->rsvpStatus,
        ];
    }
}
