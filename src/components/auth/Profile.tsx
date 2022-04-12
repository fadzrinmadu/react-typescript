export type ProfileProps = {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>Private profile component. Name is {name}</div>
  );
};
