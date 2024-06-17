<?php

namespace App\Services\Invitations;

use App\Models\Invitation;
use App\Services\Invitations\DataObjects\CreateInvitationObject;

class CreateInvitation
{
    protected CreateInvitationObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(CreateInvitationObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create occasion.
     *
     * @param  array  $input
     */
    public function run(): Invitation
    {
        $occasion = Invitation::create($this->object->toArray());

        return $occasion;
    }
}
