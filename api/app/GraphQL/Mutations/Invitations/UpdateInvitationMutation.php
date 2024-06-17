<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\DataObjects\UpdateInvitationObject;
use App\Services\Invitations\UpdateInvitation as UpdateInvitationService;

final class UpdateInvitationMutation
{
    public function __construct(
        protected UpdateInvitationService $updateInvitationService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Invitation
    {
        $event = $this->updateInvitationService
            ->fromObject(UpdateInvitationObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
