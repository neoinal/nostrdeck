import { NostrService } from "@/services/nostr";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type NostrContextType = {
  service?: NostrService;
};

const NostrContext = createContext<NostrContextType | undefined>(
  undefined as never,
);

export const useNostr = (): NostrContextType => {
  return useContext(NostrContext) as NostrContextType;
};

type NostrProviderType = PropsWithChildren;

// const service: NostrService = new NostrService();

// service.start();

// export const NostrProvider = ({ children }: NostrProviderType): JSX.Element => {
//   const service = useRef<NostrService | undefined>(undefined);
//   // const [nostr, setNostr] = useState<NostrContextType>({
//   //   service: new NostrService(),
//   // });
//   // const nostr = { service: serviceRef };
//   useEffect(() => {
//     service.current = new NostrService();
//     // nostr.service.start();
//     // setNostr({ service });

//     service.current.start();

//     return () => {
//       // nostr.service.stop();
//       service.current?.stop();
//     };
//   }, []);

//   return (
//     <NostrContext.Provider value={{service}}>{children}</NostrContext.Provider>
//   );
// };

// const service = new NostrService();

export const NostrProvider = ({ children }: NostrProviderType): JSX.Element => {
  const service = useRef<NostrService | undefined>(undefined);
  const [nostr, setNostr] = useState<NostrContextType>({ service: undefined });

  // useEffect(() => {
  //   (async () => {
  //     service.current = new NostrService();
  //     await service.current.start();
  //   })();
  //   return () => {
  //     service.current?.stop();
  //   };
  // }, []);

  useEffect(() => {
    const init = async () => {
      console.log(`Call NostrProvider#useEffect#init`);
      service.current = new NostrService();
      await service.current.start();
      setNostr({ service: service.current });
    };

    init();
    return () => {
      service.current?.stop();
    };
  }, []);

  return (
    <NostrContext.Provider value={nostr}>{children}</NostrContext.Provider>
  );
};
