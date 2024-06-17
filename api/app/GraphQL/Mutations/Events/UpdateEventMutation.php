<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Events;

use App\Models\Event;
use App\Services\Events\DataObjects\UpdateEventObject;
use App\Services\Events\UpdateEvent as UpdateEventService;

final class UpdateEventMutation
{
    public function __construct(
        protected UpdateEventService $updateEventService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Event
    {
        $event = $this->updateEventService
            ->fromObject(UpdateEventObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
