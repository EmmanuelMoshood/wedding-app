<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\CreateInvitation as CreateInvitationService;
use App\Services\Invitations\DataObjects\CreateInvitationObject;
use Illuminate\Auth\AuthManager;

final class CreateInvitationMutation
{
    public function __construct(
        protected AuthManager $authManager,
        protected CreateInvitationService $createInvitationService
    ) {

    }

    /** @param  array{title: string}  $args */
    public function __invoke(mixed $root, array $args): Invitation
    {
        $object = CreateInvitationObject::fromGraphql(
            $this->authManager->guard()->user(), $args
        );

        $service = $this->createInvitationService
            ->fromObject($object);

        $occasion = $service->run();

        return $occasion;
    }
}
