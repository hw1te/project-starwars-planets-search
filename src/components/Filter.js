import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    handleClick,
  } = useContext(MyContext);

  return (
    <div>
      <select
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
        value={ column }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
        value={ comparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ ({ target }) => setNumber(target.value) }
        type="number"
        data-testid="value-filter"
        value={ number }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
