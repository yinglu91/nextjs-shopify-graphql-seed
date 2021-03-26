import { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://yinglu91-app2.myshopify.com/api/2021-01/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token': '9a8e21c184ff9c0dc91363f9105f1a46',
      'Content-Type': 'application/json',
    }
  }),

  cache: new InMemoryCache()
})

const  MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>ABC Inc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

// https://next-shopify-storefront.herokuapp.com/products
