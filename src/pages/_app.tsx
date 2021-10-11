import 'styles/styles.scss';
import 'nprogress/nprogress.css';
import React from 'react';
import type { AppContext, AppProps } from 'next/app';
import reduxWrapper, { SagaStore } from 'redux/store';
import { END } from 'redux-saga';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
MyApp.getInitialProps = reduxWrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: AppContext) => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
        ...(Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {}),
      };

      // 2. Stop the saga if on server
      if (ctx.req) {
        console.log('Saga is executing on server, we will wait');
        store.dispatch(END);
        await (store as SagaStore).sagaTask.toPromise();
      }

      // 3. Return props
      return {
        pageProps,
      };
    }
);

export default reduxWrapper.withRedux(MyApp);
