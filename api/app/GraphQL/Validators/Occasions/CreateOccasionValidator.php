<?php

declare(strict_types=1);

namespace App\GraphQL\Validators\Occasions;

use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Validation\Validator;

final class CreateOccasionValidator extends Validator
{
    /**
     * Return the validation rules.
     *
     * @return array<string, array<mixed>>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                Rule::unique('occasions', 'title'),
            ],
            'slug' => [
                'required',
                Rule::unique('occasions', 'slug'),
            ],
            'photo' => [
                'sometimes',
                'image',
            ],
        ];
    }
}
