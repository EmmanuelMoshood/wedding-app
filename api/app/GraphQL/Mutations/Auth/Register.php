<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Auth;

use App\Models\User;
use Illuminate\Auth\AuthManager;
use Nuwave\Lighthouse\Exceptions\AuthenticationException;

final readonly class Register
{
    public function __construct(
        private AuthManager $authManager,
    ) {
        //
    }

    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        /** @var \Illuminate\Auth\EloquentUserProvider $userProvider */
        $userProvider = $this->authManager->createUserProvider('users');

        /** @var User $user */
        $user = $userProvider->createModel()
            ->query()
            ->create([
                'name' => $args['name'],
                'email' => $args['email'],
                'password' => $args['password'],
            ]);

        if (! $user) {
            throw new AuthenticationException('Unable to create use.');
        }

        return [
            'token' => $user->createToken('login')->plainTextToken,
        ];
    }
}
