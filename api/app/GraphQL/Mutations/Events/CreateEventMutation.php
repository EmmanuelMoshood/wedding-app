<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Events;

use App\Models\Event;
use App\Services\Events\CreateEvent as CreateEventService;
use App\Services\Events\DataObjects\CreateEventObject;
use Illuminate\Auth\AuthManager;

final class CreateEventMutation
{
    public function __construct(
        protected AuthManager $authManager,
        protected CreateEventService $createEventService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Event
    {
        $event = $this->createEventService
            ->fromObject(CreateEventObject::fromGraphql(
                $this->authManager->guard()->user(), $args
            ))
            ->run();

        return $event;
    }
}
