<?php

declare(strict_types=1);

namespace App\GraphQL\Validators\Events;

use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Validation\Validator;

final class CreateEventValidator extends Validator
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
            ],
            'occasion' => [
                'required',
                Rule::unique('occasions', 'uuid')->where('user_id', auth()->id()),
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
