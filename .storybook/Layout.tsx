import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';
import '../src/App.css';
import SuspenseContainer from '../src/containers/SuspenseContainer';
import { makeServer } from "../src/server";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const Layout = ({ children }) => {
  return (
    <MemoryRouter>
      <QueryClientProvider client={client}>
        <SuspenseContainer>
          {children}
        </SuspenseContainer>
      </QueryClientProvider>
    </MemoryRouter>
  )
}

export default Layout;