import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

const ReduxLayout: FC = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxLayout;