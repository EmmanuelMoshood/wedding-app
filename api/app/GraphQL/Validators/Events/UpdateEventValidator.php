<?php

declare(strict_types=1);

namespace App\GraphQL\Validators\Events;

use Nuwave\Lighthouse\Validation\Validator;

final class UpdateEventValidator extends Validator
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
                'sometimes',
            ],
            'invite' => [
                'sometimes',
                'image',
            ],
            'starts' => [
                'sometimes',
                'date',
            ],
            'ends' => [
                'sometimes',
                'date',
                'after_or_equals:starts',
            ],
        ];
    }
}
