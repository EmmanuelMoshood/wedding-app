<?php

namespace App\Services\Events\DataObjects;

use App\Models\Occasion;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;

class CreateEventObject
{
    public function __construct(
        public readonly string $title,
        public readonly Carbon $starts,
        public readonly Carbon $ends,
        public readonly ?UploadedFile $invite,
        public readonly Occasion $occasion,
    ) {
        //
    }

    public static function fromGraphql(User $user, array $args)
    {
        $occasion = Occasion::query()
            ->where('uuid', $args['occasion'])
            ->where('user_id', $user->getKey())
            ->firstOrFail();

        return new static(
            title: Arr::get($args, 'title', ''),
            starts: Carbon::parse(Arr::get($args, 'starts', now()->startOfHour())),
            ends: Carbon::parse(Arr::get($args, 'ends', now()->endOfDay())),
            invite: Arr::get($args, 'invite', null),
            occasion: $occasion,
        );
    }

    public function toArray()
    {
        return [
            'title' => $this->title,
            'user_id' => $this->occasion->user->getKey(),
            'occasion_id' => $this->occasion->getKey(),
            'starts' => $this->starts->toDateTimeString(),
            'ends' => $this->ends->toDateTimeString(),
        ];
    }
}
