import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import Header from './components/Header';
import Footer from './components/Footer';

const USER_COUNT = 5;
const USER_DATA_URL = '/data/users.json';

function App() {
  const [users, setUsers] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const loadedUserCount = Object.keys(users).length;

  useEffect(() => {
    setIsLoading(true);

    fetch(USER_DATA_URL)
      .then(response => response.json())
      .then(json => {
        setUsers(json);

        setIsLoading(false);
      });
  }, [loadedUserCount]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <Header />
          </div>
        </div>

        <main role="main" className="has-mb-1">
          <h2 className="is-size-4 has-mb-1">
            Top {USER_COUNT} Active Users
          </h2>

          {isLoading
            ?
            <p>Loading...</p>
            :
            users.map(user => <User user={user} key={user.id} />)
          }
        </main>

        <Footer />
      </div>
    </section>
  );
}

export default App;
