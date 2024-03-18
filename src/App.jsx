import React from 'react';
import Provider from './context/Provider.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buying from './components/pages/Buying.jsx';
import Payment from './components/pages/Payment.jsx';
function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element= {< Buying />}/>
                    <Route path="/Payment" element= {< Payment />}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
