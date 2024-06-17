<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

final class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args): User
    {
        $guard = Auth::guard(Arr::first(config('sanctum.guard')));

        if (! $guard->attempt($args)) {
            throw new Error('Invalid credentials.');
        }

        $user = $guard->user();
        assert($user instanceof User, 'Since we successfully logged in, this can no longer be `null`.');

        return $user;
    }
}
