export const IndividualCharacter = ({
  name,
  species,
  image,
  gender,
  episode,
  status,
  origin,
}) => {
  return (
    <div>
      <span>{name}</span>
      <img src={image} />
      <span>{species}</span>
      <span>{gender}</span>
      <span>{status}</span>
      <span>{origin}</span>
      <span>{episode}</span>
    </div>
  );
};

export default IndividualCharacter;