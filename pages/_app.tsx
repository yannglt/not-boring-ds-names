import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

import store from "../store/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
    </Provider>
  )
}
