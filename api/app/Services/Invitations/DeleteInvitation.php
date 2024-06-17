<?php

namespace App\Services\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\DataObjects\DeleteInvitationObject;

class DeleteInvitation
{
    public function __construct(
        protected DeleteInvitationObject $object
    ) {
        //
    }

    public function fromObject(DeleteInvitationObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Delete user.
     *
     * @param  array  $input
     */
    public function run(): Invitation
    {
        $this->object
            ->event
            ->delete();

        return $this->object->event;
    }
}
