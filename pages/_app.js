import "../styles/globals.css";
import { wrapper } from "@/redux/rootStore";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import Reset from "@/styles/reset";
import themes from "@/styles/themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange());

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange());
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={themes}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // 1. Wait for all page actions to dispatch
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  // 3. Return props
  return {
    pageProps: {
      // Call page-level getInitialProps
      pageProps,
    },
  };
};

export default wrapper.withRedux(MyApp);
