const Person = (props) => {
  const { person } = props;
  const { id, name, age, image } = person;

  return (
    <>
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
    </>
  );
};
export default Person;
{
  /* <li style={{ margin: '15px' }}>
  
</li>; */
}
