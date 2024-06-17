<?php

namespace App\Services\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\DataObjects\UpdateOccasionObject;

class UpdateOccasion
{
    protected UpdateOccasionObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(UpdateOccasionObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create user.
     *
     * @param  array  $input
     */
    public function run(): Occasion
    {
        $this->object
            ->occasion
            ->update($this->object->toArray());

        return $this->object->occasion->refresh();
    }
}
