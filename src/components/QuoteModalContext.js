import { createContext, useContext } from "react";

export const QuoteModalContext = createContext(null);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  }

  return context;
};
