<?php

namespace App\Providers;

use App\Enums\RSVPStatus;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;
use Nuwave\Lighthouse\Schema\TypeRegistry;

class GraphqlServiceProvider extends ServiceProvider
{
    private $enums = [
        RSVPStatus::class,
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(TypeRegistry $typeRegistry): void
    {
        Collection::make($this->enums)
            ->map(fn ($enum) => $typeRegistry->register($enum));
    }
}
