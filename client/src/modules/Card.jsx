import styles from "./Card.module.css"

const Card = ({ name, species, image, gender, episode }) => {
  return (
    <div className={styles.card}>
      <span>{name}</span>
      <img src={image} />
      <span>{species}</span>
      <span>{gender}</span>
      <span>{episode}</span>
    </div>
  );
};

export default Card;
