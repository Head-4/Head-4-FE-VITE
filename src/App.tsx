import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {GlobalStyled} from "./styles/GlobalStyled";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {LoadingPage} from "./pages/utilPages/LoadingPage";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./tanstack-query/queryClient";
import PWAInstallBanner from "./components/PWAInstallBanner.tsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <GlobalStyled/>
        <LoadingPage/>
        <ReactQueryDevtools/>
        <PWAInstallBanner/>
      </QueryClientProvider>
    </ThemeProvider>
  );
};