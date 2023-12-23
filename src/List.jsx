import data from './data';
import { useState } from 'react';
const List = () => {
  const [people, setPeople] = useState(data);
  const createList = (person) => {
    const { id, name, age, image } = person;
    return (
      <li style={{ margin: '15px' }}>
        <img
          src={image}
          alt={name}
          style={{
            maxWidth: '300px',
            maxHeight: '250px',
            margin: '15px',
            borderRadius: '8px',
          }}
        />
        <h3>{name}</h3>
        <h4>{age}</h4>
      </li>
    );
  };
  return <ul>{people.map(createList)}</ul>;
};
export default List;
