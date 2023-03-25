import "styles/globals.css";
import "styles/index.scss";
import "nprogress/nprogress.css";
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/stores";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e85205",
        },
      }}
    >
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </ConfigProvider>
  );
}

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default MyApp;
