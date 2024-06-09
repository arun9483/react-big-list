import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './Home';
import { People } from './people/People';
import { PersonDetails } from './people';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
