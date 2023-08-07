import * as Nostr from "nostr-typedef";

export type User = {
  name: string;
  display_name: string;
  banner?: string;
  picture?: string;
  about?: string;
  website?: string;
  nip05?: string;
  lud06?: string;
  lud16?: string;
  [key: string]: string | undefined;
};

export type Note = {
  event: NostrEvent;
  user?: User;
  reply?: Note;
  repost?: Note;
};

export type NostrEvent = Nostr.Event;
