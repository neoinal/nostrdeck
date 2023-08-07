import { Subscription } from "rxjs";
import { RelayConfig, RxNostr, createRxNostr } from "rx-nostr";

export class NostrService {
  defaultRelays: RelayConfig[] = [
    {
      url: "wss://yabu.me",
      write: true,
      read: true,
    },
    // {
    //   url: "wss://relay.nostr.wirednet.jp",
    //   write: true,
    //   read: true,
    // },
  ];
  private rxNostr: RxNostr;

  private readonly id = Date.now();

  private readonly relayStatusSubscriber: Subscription;

  constructor() {
    console.log(`NostrService#constructor id = ${this.id}`);

    this.rxNostr = createRxNostr();
    this.relayStatusSubscriber = this.rxNostr
      .createConnectionStateObservable()
      .subscribe({
        next: (evt) => {
          console.log(
            `Id = ${this.id}, From: ${evt.from}, State: ${evt.state}`,
          );
        },
        complete: () => {
          console.log(`Id = ${this.id}, ConnectionState is complete`);
        },
      });
    this.rxNostr.createAllEventObservable().subscribe({
      next: (packet) => {
        console.log(`Id = ${this.id}, Event: `, packet);
      },
    });
    this.rxNostr.createAllMessageObservable().subscribe({
      next: (packet) => {
        console.log(`Id = ${this.id}, Message: `, packet);
      },
    });
    this.rxNostr.createAllErrorObservable().subscribe({
      next: (packet) => {
        console.log(`Id = ${this.id}, Error: `, packet);
      },
      complete: () => {
        console.log(`Id = ${this.id}, Error complete`);
      },
    });
  }

  async start(): Promise<void> {
    console.log(`Call NostrService#start id = ${this.id}`);
    await this.rxNostr.switchRelays(this.defaultRelays);
  }

  stop() {
    console.log(`Call NostrService#stop id = ${this.id}`);
    this.relayStatusSubscriber.unsubscribe();
    // setTimeout(() => {
    this.rxNostr.dispose();
    console.log(`Id = ${this.id} Disposed rxNostr`);
    // }, 10);
  }
}
