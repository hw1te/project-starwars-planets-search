import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import './Table.css';

const Table = () => {
  const { data, nameFilter } = useContext(MyContext);
  const tableHeaders = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  const planetFilter = data.filter((planet) => planet.name.toLowerCase()
    .includes(nameFilter.name));

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={ index }>
                { header }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetFilter.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
