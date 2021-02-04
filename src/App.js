import React from 'react'
import { Navbar, Search } from './components'
import Routes from './routes'
//(if I end up using React Router)

function App() {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
