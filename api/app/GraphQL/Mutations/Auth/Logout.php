<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Auth;

use App\Models\User;
use Illuminate\Auth\AuthManager;

final readonly class Logout
{
    public function __construct(
        private AuthManager $authManager,
    ) {
        //
    }

    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        /** @var \Laravel\Sanctum\Guard $guard */
        $guard = $this->authManager->guard('sanctum');
        /** @var User $user */
        $user = $guard->user();

        /** @var \Laravel\Sanctum\PersonalAccessToken $token */
        $token = $user->currentAccessToken();
        $token->delete();
        $guard->logout();

        return $user;
    }
}
