<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\DataObjects\UpdateOccasionObject;
use App\Services\Occasions\UpdateOccasion as UpdateOccasionService;

final class UpdateOccasionMutation
{
    public function __construct(
        protected UpdateOccasionService $updateOccasionService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Occasion
    {
        $event = $this->updateOccasionService
            ->fromObject(UpdateOccasionObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
