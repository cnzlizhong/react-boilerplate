import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/global-styles.less';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
