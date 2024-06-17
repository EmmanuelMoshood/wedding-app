<?php

namespace App\Services\Invitations\DataObjects;

use App\Models\Invitation;
use Illuminate\Support\Arr;

class UpdateInvitationObject
{
    public function __construct(
        public readonly Invitation $occasion,
        public readonly string $title,
        public readonly string $slug,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $occasion = Invitation::findOrFail($args['id']);

        return new static(
            occasion: $occasion,
            title: Arr::get($args, 'title', $occasion->title),
            slug: Arr::get($args, 'slug', $occasion->slug),
        );
    }

    public function toArray()
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
        ];
    }
}
