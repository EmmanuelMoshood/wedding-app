<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

final class Logout
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args): ?User
    {
        $guard = Auth::guard(Arr::first(config('sanctum.guard')));

        $user = $guard->user();
        $guard->logout();

        return $user;
    }
}
