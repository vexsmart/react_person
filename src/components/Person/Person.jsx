export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const married = isMarried;

  const partnerLabel =
    sex === 'm'
      ? 'wife'
      : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age != null && <p className="Person__age">I am {age}</p>}
      {married ? (
        <p className="Person__partner">
          {partnerName} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
