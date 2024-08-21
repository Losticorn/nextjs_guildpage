"use client"; // This is important!

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

// This component will only be executed on the client-side
export default function ReactQueryProvider({ children }) {
  // QueryClient is created and maintained on the client side
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
