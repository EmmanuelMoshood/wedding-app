<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\CreateOccasion as CreateOccasionService;
use App\Services\Occasions\DataObjects\CreateOccasionObject;
use Illuminate\Auth\AuthManager;

final class CreateOccasionMutation
{
    public function __construct(
        protected AuthManager $authManager,
        protected CreateOccasionService $createOccasionService
    ) {

    }

    /** @param  array{title: string}  $args */
    public function __invoke(mixed $root, array $args): Occasion
    {
        $object = CreateOccasionObject::fromGraphql(
            $this->authManager->guard()->user(), $args
        );

        $service = $this->createOccasionService
            ->fromObject($object);

        $occasion = $service->run();

        return $occasion;
    }
}
