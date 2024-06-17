<?php

namespace App\Services\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\DataObjects\UpdateInvitationObject;

class UpdateInvitation
{
    protected UpdateInvitationObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(UpdateInvitationObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create user.
     *
     * @param  array  $input
     */
    public function run(): Invitation
    {
        $this->object
            ->occasion
            ->update($this->object->toArray());

        return $this->object->occasion->refresh();
    }
}
