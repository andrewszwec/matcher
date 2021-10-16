import React, { useState } from 'react';

import './App.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Camilla', person1: 'Abhay', person2: 'Katrine'},
  { id: 2, name: 'Richard', person1: 'Cristina', person2: 'Martin'},
  { id: 3, name: 'Rikki', person1: 'Mia', person2: 'Andreas'},
  { id: 4, name: 'Hussain', person1: 'Tillie ', person2: 'Mick'},
  { id: 5, name: 'Marie', person1: 'Nate', person2: 'Tess'},
  { id: 6, name: 'Anders', person1: 'Camila', person2: 'Danielle'},
  { id: 7, name: 'Jacob', person1: 'Richard', person2: 'Tomi'},
  { id: 8, name: 'Mai', person1: 'Rikki', person2: 'Steve'},
  { id: 9, name: 'Libby', person1: 'Hussain', person2: 'Taylor'},
  { id: 10, name: 'Carolyn', person1: 'Marie', person2: 'Rachel'},
  { id: 11, name: 'Henrik', person1: 'Anders', person2: 'Abhay'},
  { id: 12, name: 'Cristina', person1: 'Jacob', person2: 'Cristina'},
  { id: 13, name: 'Hanna', person1: 'Mai', person2: 'Mia'},
  { id: 14, name: 'Jonas', person1: 'Libby', person2: 'Tillie '},
  { id: 15, name: 'Sandra', person1: 'Carolyn', person2: 'Nate'},
  { id: 16, name: 'Dom', person1: 'Henrik', person2: 'Camila'},
  { id: 17, name: 'Sam', person1: 'Cristina', person2: 'Richard'},
  { id: 18, name: 'Katrine', person1: 'Hanna', person2: 'Rikki'},
  { id: 19, name: 'Martin', person1: 'Jonas', person2: 'Hussain'},
  { id: 20, name: 'Andreas', person1: 'Sandra', person2: 'Marie'},
  { id: 21, name: 'Mick', person1: 'Dom', person2: 'Anders'},
  { id: 22, name: 'Tess', person1: 'Sam', person2: 'Jacob'},
  { id: 23, name: 'Danielle', person1: 'Katrine', person2: 'Mai'},
  { id: 24, name: 'Tomi', person1: 'Martin', person2: 'Libby'},
  { id: 25, name: 'Steve', person1: 'Andreas', person2: 'Carolyn'},
  { id: 26, name: 'Taylor', person1: 'Mick', person2: 'Henrik'},
  { id: 27, name: 'Rachel', person1: 'Tess', person2: 'Cristina'},
  { id: 28, name: 'Abhay', person1: 'Danielle', person2: 'Hanna'},
  { id: 29, name: 'Cristina', person1: 'Tomi', person2: 'Jonas'},
  { id: 30, name: 'Mia', person1: 'Steve', person2: 'Sandra'},
  { id: 31, name: 'Tillie ', person1: 'Taylor', person2: 'Dom'}
];

function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">1) {user.person1}</span>
              <span className="user-age">2) {user.person2}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;