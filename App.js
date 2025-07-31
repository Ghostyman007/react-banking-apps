import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="app">
      <nav className="mobile-nav">
        <button onClick={togglePopup}>Transactions</button>
      </nav>
      <main>
        <h1>Welcome to Fake Bank</h1>
        {showPopup && (
          <div className="popup">
            <h2>Transaction Details</h2>
            <p>• Payment to John: $500</p>
            <p>• Transfer from Alice: $300</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        )}
      </main>
    </div>
  );
}
