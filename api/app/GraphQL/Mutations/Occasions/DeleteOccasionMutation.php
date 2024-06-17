<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\DataObjects\DeleteOccasionObject;
use App\Services\Occasions\DeleteOccasion as DeleteOccasionService;

final class DeleteOccasionMutation
{
    public function __construct(
        protected DeleteOccasionService $deleteOccasionService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Occasion
    {
        $event = $this->deleteOccasionService
            ->fromObject(DeleteOccasionObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
