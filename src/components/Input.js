import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { nameFilter, setNameFilter } = useContext(MyContext);

  function handleChange({ target }) {
    setNameFilter({ name: target.value });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          title="Type something"
          data-testid="name-filter"
          value={ nameFilter.name }
          onChange={ handleChange }
        />
      </div>
      <div />
      <br />
    </div>
  );
}

export default Input;
