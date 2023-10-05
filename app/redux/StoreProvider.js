"use client";
// import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }) {
  const { store: reduxStore, persistor } = store();
  return (
    // <SessionProvider>
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
    // </SessionProvider>
  );
}
