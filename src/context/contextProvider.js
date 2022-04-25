import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
// import api from '../api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState({ name: '' });

  useEffect(() => {
    async function fetchPlanetsAPI() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
    }
    fetchPlanetsAPI();
    // setData(api.results);
  }, []);

  return (
    <MyContext.Provider value={ { data, nameFilter, setNameFilter } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
