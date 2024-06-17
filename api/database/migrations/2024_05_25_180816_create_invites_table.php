<?php

use App\Enums\RSVPStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invites', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->foreignId('event_id')->references('id')->on('events')->onDelete('cascade');
            $table->foreignId('guest_id')->references('id')->on('guests')->onDelete('cascade');
            $table->timestamp('notified_at')->nullable();
            $table->string('rsvp_status')->nullable()->default(RSVPStatus::UNKNOWN->value);
            $table->timestamp('rsvped_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invites');
    }
};
