import data from './data';
import Person from './Person';
import { useState } from 'react';
const List = () => {
  const [people, setPeople] = useState(data);
  const createList = (person) => {
    return (
      <li key={person.id} style={{ margin: '15px' }}>
        <Person person={person}></Person>;
      </li>
    );
  };
  return <ul>{people.map(createList)}</ul>;
};
export default List;
