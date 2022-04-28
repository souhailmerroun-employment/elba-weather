import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CitiesProvider } from "../src/cities/CityProvider";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <CitiesProvider>
      <Component {...pageProps} />
    </CitiesProvider>
  </QueryClientProvider>
}

export default MyApp
