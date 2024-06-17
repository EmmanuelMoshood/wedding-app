<?php

declare(strict_types=1);

namespace App\Enums;

enum OccasionType: string
{
    case WEDDING = 'wedding';
    case BIRTHDAY = 'birthday';
    case ANY = 'any';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function fromValue(int|string $value): self
    {
        foreach (self::cases() as $status) {
            if ((int) $value === $status->value) {
                return $status;
            }
        }

        throw new \ValueError('Value is not a valid event type');
    }
}
