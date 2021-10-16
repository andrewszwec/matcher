import React, { useState } from 'react';

import './App.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Abhay', person1: 'Rachel', person2: 'Cristina MS'},
  { id: 2, name: 'Anders', person1: 'Cristina MS', person2: 'Tillie'},
  { id: 3, name: 'Andreas', person1: 'Danielle', person2: 'Libby'},
  { id: 4, name: 'Camilla', person1: 'Mai', person2: 'Tillie'},
  { id: 5, name: 'Carolyn', person1: 'Libby', person2: 'Richard'},
  { id: 6, name: 'Cristina MS', person1: 'Anders', person2: 'Abhay'},
  { id: 7, name: 'Cristina T', person1: 'Hanna', person2: 'Rachel'},
  { id: 8, name: 'Danielle', person1: 'Jonas', person2: 'Andreas'},
  { id: 9, name: 'Dom', person1: 'Henrik', person2: 'Mick'},
  { id: 10, name: 'Hanna', person1: 'Cristina T', person2: 'Marie'},
  { id: 11, name: 'Henrik', person1: 'Martin', person2: 'Dom'},
  { id: 12, name: 'Hussain', person1: 'Sandra', person2: 'Tess'},
  { id: 13, name: 'Jacob', person1: 'Mick', person2: 'Steve'},
  { id: 14, name: 'Jonas', person1: 'Rikke', person2: 'Danielle'},
  { id: 15, name: 'Katrine', person1: 'Mia', person2: 'Mai'},
  { id: 16, name: 'Libby', person1: 'Andreas', person2: 'Carolyn'},
  { id: 17, name: 'Mai', person1: 'Katrine', person2: 'Camilla'},
  { id: 18, name: 'Marie', person1: 'Hanna', person2: 'Sam'},
  { id: 19, name: 'Martin', person1: 'Richard', person2: 'Henrik'},
  { id: 20, name: 'Mia', person1: 'Katrine', person2: 'Taylor'},
  { id: 21, name: 'Mick', person1: 'Jacob', person2: 'Dom'},
  { id: 22, name: 'Nate', person1: 'Sam', person2: 'Steve'},
  { id: 23, name: 'Rachel', person1: 'Cristina T', person2: 'Abhay'},
  { id: 24, name: 'Richard', person1: 'Carolyn', person2: 'Martin'},
  { id: 25, name: 'Rikke', person1: 'Jonas', person2: 'Tess'},
  { id: 26, name: 'Sam', person1: 'Nate', person2: 'Marie'},
  { id: 27, name: 'Sandra', person1: 'Hussain', person2: 'Tomi'},
  { id: 28, name: 'Steve', person1: 'Nate', person2: 'Jacob'},
  { id: 29, name: 'Taylor', person1: 'Tomi', person2: 'Mia'},
  { id: 30, name: 'Tess', person1: 'Rikke', person2: 'Hussain'},
  { id: 31, name: 'Tillie', person1: 'Camilla', person2: 'Anders'},
  { id: 32, name: 'Tomi', person1: 'Taylor', person2: 'Sandra'}
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