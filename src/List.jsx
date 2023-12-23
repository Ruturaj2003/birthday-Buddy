import data from './data';
import Person from './Person';
import { useState } from 'react';
const List = () => {
  const [people, setPeople] = useState(data);
  function clearAll() {
    setPeople([]);
  }
  const createList = (person) => {
    return (
      <li key={person.id} style={{ margin: '15px' }}>
        <Person person={person}></Person>;
      </li>
    );
  };
  return (
    <>
      <ul>{people.map(createList)}</ul>
      <button onClick={clearAll}>Clear All</button>
    </>
  );
};
export default List;
