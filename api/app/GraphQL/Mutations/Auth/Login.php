<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Auth;

use App\Models\User;
use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Nuwave\Lighthouse\Exceptions\AuthenticationException;

final readonly class Login
{
    public function __construct(
        private AuthManager $authManager,
    ) {
        //
    }

    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        $userProvider = $this->authManager->createUserProvider('users');

        /** @var User $user */
        $user = $userProvider->retrieveByCredentials([
            'email' => $args['email'],
            'password' => $args['password'],
        ]);

        if (! $user || ! $userProvider->validateCredentials($user, $args)) {
            throw new AuthenticationException('The provided credentials are incorrect.');
        }

        if ($user instanceof MustVerifyEmail && ! $user->hasVerifiedEmail()) {
            throw new AuthenticationException('Your email address is not verified.');
        }

        return [
            'token' => $user->createToken('login')->plainTextToken,
        ];
    }
}
