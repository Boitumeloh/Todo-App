// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/todos" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/todos" /> : <Signup />} />
        <Route path="/todos" element={user ? <Todo /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;