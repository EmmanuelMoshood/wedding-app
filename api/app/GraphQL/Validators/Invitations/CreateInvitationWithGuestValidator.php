<?php

declare(strict_types=1);

namespace App\GraphQL\Validators\Invitations;

use App\Enums\RSVPStatus;
use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Validation\Validator;

final class CreateInvitationWithGuestValidator extends Validator
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
            'firstName' => [
                'required',
            ],
            'lastName' => [
                'required',
            ],
            'email' => [
                'required',
            ],
            'phone' => [
                'sometimes',
            ],
            'events' => [
                'array',
            ],
            'events.*' => [
                'uuid',
                Rule::exists('events', 'uuid')->where('user_id', auth()->id()),
            ],
            'rsvpStatus' => [
                'sometimes',
                Rule::enum(RSVPStatus::class),
            ],
        ];
    }
}
