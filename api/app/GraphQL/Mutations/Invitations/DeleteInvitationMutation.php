<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\DataObjects\DeleteInvitationObject;
use App\Services\Invitations\DeleteInvitation as DeleteInvitationService;

final class DeleteInvitationMutation
{
    public function __construct(
        protected DeleteInvitationService $deleteInvitationService
    ) {

    }

    /** @param  array{name: string}  $args */
    public function __invoke(mixed $root, array $args): Invitation
    {
        $event = $this->deleteInvitationService
            ->fromObject(DeleteInvitationObject::fromGraphql($args))
            ->run();

        return $event;
    }
}
