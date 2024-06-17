<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Invitations;

use App\Models\Guest;
use App\Models\Occasion;
use App\Services\Invitations\CreateInvitationWithGuest as CreateInvitationWithGuestService;
use App\Services\Invitations\DataObjects\CreateInvitationWithGuestObject;
use Illuminate\Auth\AuthManager;

final class CreateInvitatioWithGuestMutation
{
    public function __construct(
        protected AuthManager $authManager,
        protected CreateInvitationWithGuestService $createInvitationWithGuestService
    ) {
        //
    }

    /** @param  array{title: string}  $args */
    public function __invoke(mixed $root, array $args): Guest
    {
        $occasion = Occasion::query()
            ->where('user_id', $this->authManager->guard()->user()->id)
            ->where('uuid', $args['occasion'])
            ->firstOrFail();

        $object = CreateInvitationWithGuestObject::fromGraphql(
            $occasion, $args
        );

        $service = $this->createInvitationWithGuestService
            ->fromObject($object);

        $guest = $service->run();

        return $guest;
    }
}
