import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
// import api from '../api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState({ name: '' });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

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

  const handleClick = () => {
    if (comparison === 'maior que') {
      const filter = data.filter((element) => element[column] > Number(number));
      setData(filter);
    }
    if (comparison === 'menor que') {
      const filter = data.filter((element) => element[column] < Number(number));
      setData(filter);
    }
    if (comparison === 'igual a') {
      const filter = data.filter((element) => element[column] === number);
      setData(filter);
    }
    return data;
  };

  const contextValue = {
    data,
    nameFilter,
    setNameFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    handleClick,
  };

  return (
    <MyContext.Provider
      value={ contextValue }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
