import * as ReactDOM from 'react-dom';
import './static-css';

import App from './App';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  rootElement
);
