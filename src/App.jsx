import React from 'react';
import {LoginPage} from "./pages/LoginPage";

const App = () => (
    <div className="App">
        <LoginPage onLogin={data => console.log(data)}/>
    </div>
);

export default App;
