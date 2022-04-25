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
  const [array, setArray] = useState([]);

  useEffect(() => {
    async function fetchPlanetsAPI() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
    }
    fetchPlanetsAPI();
    // setData(api.results);
    setArray([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
  }, []);

  const handleClick = () => {
    if (comparison === 'maior que') {
      const filter = data.filter((element) => element[column] > Number(number));
      array.splice(array.indexOf(column), 1);
      setData(filter);
    }
    if (comparison === 'menor que') {
      const filter = data.filter((element) => element[column] < Number(number));
      array.splice(array.indexOf(column), 1);
      setData(filter);
    }
    if (comparison === 'igual a') {
      const filter = data.filter((element) => element[column] === number);
      array.splice(array.indexOf(column), 1);
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
    array,
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
