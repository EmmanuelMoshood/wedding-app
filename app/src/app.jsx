import './bootstrap';
import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { AuthProvider } from '@/hooks/auth';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const colors = {
    brand: {
      900: '#2B6377',
      800: '#2B6377',
      100: '#94CCDF',
      50: '#CCDFE3',
    },
    brandSecondary: {
      900: '#EBE4D4'
    }
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')

const clientUri = new HttpLink({
  uri: 'http://weevite.test/graphql',
});
const clientHeaders = setContext((_, { token }) => {
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const clientAuthorizationToken = setContext(() => {
  const token = JSON.parse(localStorage.getItem("weevite-token"))

  return { token };
});
const clientLink = clientAuthorizationToken.concat(clientHeaders);
const resetToken = onError(({ networkError }) => {
  if (
    networkError &&
    networkError.name ==='ServerError' &&
    networkError.statusCode === 401
  ) {
    localStorage.setItem("weevite-token", null)
  }
});

const client = new ApolloClient({
  link: clientLink.concat(clientUri).concat(resetToken),
  cache: new InMemoryCache(),
  name: 'WeeviteApp',
  version: '1'
});

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
          </AuthProvider>
        </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
