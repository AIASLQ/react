import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 加快react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

serviceWorker.unregister();