import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { createRoutes } from "@/routes";
import { NostrProvider } from "./context/NostrContext";

const routes = createRoutes();

export const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        globalStyles: (theme) => ({
          body: {
            overflowY: "hidden",
          },
        }),
      }}
    >
      <ModalsProvider>
        <NostrProvider>
          <BrowserRouter>{routes}</BrowserRouter>
        </NostrProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};
