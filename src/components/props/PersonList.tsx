import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>{name.first} {name.last}</h2>
      ))}
    </div>
  );
}
