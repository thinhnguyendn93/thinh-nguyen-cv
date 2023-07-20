import { enableMapSet } from 'immer';
import { createRoot } from 'react-dom/client';
import App from './app';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'styles/app.scss';
import 'config/i18n';

enableMapSet();

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
