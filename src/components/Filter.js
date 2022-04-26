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
    array,
    // list,
    // setList,
  } = useContext(MyContext);
  // Parte do requisito 4, e requisito 5 feitos com base no código do João Elpidio
  // https://github.com/tryber/sd-019-b-project-starwars-planets-search/pulls

  // const createList = ({ target }) => {
  //   setList(
  //     {
  //       column: target.value,
  //       comparison: target.value,
  //       number: target.value,
  //     },
  //   );
  //   return list;
  // };

  return (
    <>
      <div>
        <select
          onChange={ ({ target }) => setColumn(target.value) }
          data-testid="column-filter"
          value={ column }
        >
          {
            array.map((filter, index) => (
              <option key={ index } value={ filter }>{ filter }</option>
            ))
          }
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
          <ul>
            {

            }
          </ul>
        </button>
      </div>
      {/* <div>
      {
        function();
      }
      <button data-testid='filter'>
        X
      </button>
    </div> */}
    </>
  );
}

export default Filter;
