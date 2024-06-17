<?php

namespace App\Services\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\DataObjects\DeleteOccasionObject;

class DeleteOccasion
{
    public function __construct(
        protected DeleteOccasionObject $object
    ) {
        //
    }

    public function fromObject(DeleteOccasionObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Delete user.
     *
     * @param  array  $input
     */
    public function run(): Occasion
    {
        $this->object
            ->event
            ->delete();

        return $this->object->event;
    }
}
