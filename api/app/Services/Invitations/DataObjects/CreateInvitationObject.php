<?php

namespace App\Services\Invitations\DataObjects;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class CreateInvitationObject
{
    public function __construct(
        public readonly string $uuid,
        public readonly string $title,
        public readonly string $slug,
        public readonly User $user,
    ) {
        //
    }

    public static function fromGraphql(User $user, array $args)
    {
        return new static(
            uuid: Str::uuid(),
            title: Arr::get($args, 'title', ''),
            slug: Arr::get($args, 'slug', ''),
            user: $user,
        );
    }

    public function toArray()
    {
        return [
            'uuid' => $this->uuid,
            'title' => $this->title,
            'slug' => $this->slug,
            'user_id' => $this->user->getKey(),
        ];
    }
}
