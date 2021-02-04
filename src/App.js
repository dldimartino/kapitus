import React from 'react'
import { Navbar, Home, Footer } from './components'
import Routes from './routes'
//(if I end up using React Router)

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
