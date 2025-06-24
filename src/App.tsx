// src/App.tsx
import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './firebase';

const App: React.FC = () => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      {user ? <Dashboard user={user} /> : <Login />}
    </div>
  );
};

export default App;
