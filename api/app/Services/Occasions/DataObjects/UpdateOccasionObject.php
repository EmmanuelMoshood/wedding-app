<?php

namespace App\Services\Occasions\DataObjects;

use App\Models\Occasion;
use Illuminate\Support\Arr;

class UpdateOccasionObject
{
    public function __construct(
        public readonly Occasion $occasion,
        public readonly string $title,
        public readonly string $slug,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $occasion = Occasion::findOrFail($args['id']);

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
