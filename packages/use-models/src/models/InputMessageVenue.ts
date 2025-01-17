import { Venue } from '@airgram/core';

/** A message with information about a venue */
export class InputMessageVenueBaseModel {
    public _: 'inputMessageVenue';

    /** Venue to send */
    public venue: Venue;
}
