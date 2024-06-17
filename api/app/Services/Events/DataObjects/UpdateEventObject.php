<?php

namespace App\Services\Events\DataObjects;

use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;

class UpdateEventObject
{
    public function __construct(
        public readonly Event $event,
        public readonly string $title,
        public readonly Carbon $starts,
        public readonly Carbon $ends,
        public readonly ?UploadedFile $invite,
    ) {
        //
    }

    public static function fromGraphql(array $args)
    {
        $event = Event::query()
            ->where('uuid', $args['id'])
            ->firstOrFail();

        return new static(
            event: $event,
            title: Arr::get($args, 'title', $event->title),
            starts: Carbon::parse(Arr::get($args, 'starts', $event->starts)),
            ends: Carbon::parse(Arr::get($args, 'ends', $event->ends)),
            invite: Arr::get($args, 'invite', null),
        );
    }

    public function toArray()
    {
        return [
            'title' => $this->title,
            'starts' => $this->starts->toDateTimeString(),
            'ends' => $this->ends->toDateTimeString(),
        ];
    }
}
