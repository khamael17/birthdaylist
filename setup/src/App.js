import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
const[people,setPeople]=useState(data)

  return ( 
  <main>
  <section className='container'>
    
    <h3>{people.length} Upcoming Birthdays</h3>
    <List peopl={people}/>
    <button >Clear All</button>
  </section>
  </main>
    );
}

export default App;
