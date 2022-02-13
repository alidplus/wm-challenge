import type { AppProps } from 'next/app';
import DashboardLayout from 'layouts/DashboardLayout';
import ReduxLayout from 'layouts/ReduxLayout';
import { ComposeLayouts } from 'layouts/index';
import "assets/bootstrap-theme.scss";
import "assets/scss/custom.scss";

const _App = ({ Component, pageProps }: AppProps) => {
  const layouts = [ReduxLayout, DashboardLayout];

  return (
    <ComposeLayouts layouts={layouts}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default _App