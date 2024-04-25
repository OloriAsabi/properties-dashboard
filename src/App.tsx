import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import tableDataComplex from './data/data';
import { Properties, PropertiesDetails } from './pages';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="properties" element={<Properties tableData={tableDataComplex} />} />
        <Route path="properties/:propertyId" element={<PropertiesDetails  />} />
        {/* Define other routes for your application */}
      </Routes>
    </Layout>
  );
};

export default App;
