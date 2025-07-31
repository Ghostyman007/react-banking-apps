
import React, { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white p-4 rounded shadow-md flex justify-between">
        <h1 className="text-xl font-bold">MyBank</h1>
        <button onClick={() => setShowModal(true)} className="md:hidden">
          ☰
        </button>
      </header>

      <main className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <ul className="bg-white p-4 rounded shadow-md">
          <li className="py-2 border-b" onClick={() => setShowModal(true)}>💳 $200 - Grocery Store</li>
          <li className="py-2 border-b" onClick={() => setShowModal(true)}>💸 $500 - Rent</li>
        </ul>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold mb-2">Transaction Details</h3>
            <p>Amount: $200</p>
            <p>Type: Debit</p>
            <p>Status: Completed</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
