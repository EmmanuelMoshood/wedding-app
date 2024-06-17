<?php

namespace App\Models\Concerns;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasImageAsset
{
    /**
     * The URL for the default photo.
     *
     * @var string
     */
    public const DEFAULT_IMAGE_ASSET_PATH = 'https://placeimg.com/640/380/tech';

    /**
     * Update the model's image asset.
     *
     * @return void
     */
    public function updateImageAsset(UploadedFile $asset)
    {
        tap($this->{$this->getImageAssetColumn()}, function ($previous) use ($asset) {
            $this->forceFill([
                $this->getImageAssetColumn() => $asset->storePublicly(
                    'occasion-assets', []
                ),
            ])->save();

            if ($previous) {
                Storage::delete($previous);
            }
        });
    }

    /**
     * Delete the model's image asset.
     *
     * @return void
     */
    public function deleteImageAsset()
    {
        if (is_null($this->{$this->getImageAssetColumn()})) {
            return;
        }

        Storage::delete($this->{$this->getImageAssetColumn()});

        $this->forceFill([
            $this->getImageAssetColumn() => null,
        ])->save();
    }

    /**
     * Get the URL to the model's image asset.
     *
     * @return string|null
     */
    public function getImageAssetUrl()
    {
        return $this->{$this->getImageAssetColumn()}
            ? Storage::url($this->{$this->getImageAssetColumn()})
            : static::DEFAULT_IMAGE_ASSET_PATH;
    }

    /**
     * Get the model's image asset column.
     *
     * @return string
     */
    protected function getImageAssetColumn()
    {
        return 'image';
    }

    /**
     * Interact with the occasion photo
     *
     * @param  string  $value
     */
    protected function photo(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value ? Storage::url($value) : self::DEFAULT_IMAGE_ASSET_PATH
        );
    }

    /**
     * Interact with the event photo
     *
     * @param  string  $value
     */
    protected function invite(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value ? Storage::url($value) : self::DEFAULT_IMAGE_ASSET_PATH
        );
    }
}
