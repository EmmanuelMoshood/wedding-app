<?php

namespace App\Mail;

use App\Models\Event;
use App\Models\Guest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class EventGuestInvited extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        protected Event $event,
        protected Guest $guest,
    ) {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Event Guest Invited',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.invited',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $attachments = Collection::make();

        foreach ($this->guest->invites as $invite) {
            $image = $invite->image;
            $imageInfo = explode(';base64,', $image);
            $extension = str_replace('data:image/', '', $imageInfo[0]);
            $image = str_replace(' ', '+', $imageInfo[1]);

            $attachments->push(
                Attachment::fromData(fn () => base64_decode($image), "{$invite->name}.{$extension}")
            );
        }

        return $attachments->toArray();
    }
}
