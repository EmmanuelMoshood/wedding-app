<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Events;

use App\Models\Event;
use App\Services\Events\DataObjects\DeleteEventObject;
use App\Services\Events\DeleteEvent as DeleteEventService;

final class DeleteEventMutation
{
    public function __construct(
        protected DeleteEventService $deleteEventService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Event
    {
        $event = $this->deleteEventService
            ->fromObject(DeleteEventObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
