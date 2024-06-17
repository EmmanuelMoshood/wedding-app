<?php

namespace App\Services\Occasions;

use App\Models\Occasion;
use App\Services\Occasions\DataObjects\CreateOccasionObject;

class CreateOccasion
{
    protected CreateOccasionObject $object;

    public function __construct()
    {
        //
    }

    public function fromObject(CreateOccasionObject $object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Create occasion.
     *
     * @param  array  $input
     */
    public function run(): Occasion
    {
        $occasion = Occasion::create($this->object->toArray());

        $occasion->updateImageAsset($this->object->photo);

        return $occasion;
    }
}
