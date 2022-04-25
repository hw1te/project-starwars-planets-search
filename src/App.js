import React from 'react';
import './App.css';
import Provider from './context/contextProvider';
import Input from './components/Input';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Input />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
