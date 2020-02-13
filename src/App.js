import React from 'react';
import s from'./App.module.css';
import {Main} from "./components/Main";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <div className={s.app}>
            <Provider store={store}>
                <Main/>
            </Provider>
        </div>
    );
}

export default App;
