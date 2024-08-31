import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { getCharacters, getById } from "../store/actions/characterActions";
import styles from "./character.module.css";
import Card from "./Card";
import { CHARACTER_BY_ID_URL } from "../constants";


export const CharacterCards = () => {
  const characters = useSelector((store) => store.characters)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCharacters());
  }, [getById]);

  return (
    <div className={styles.container}>
      {characters.map((character) => (
          <div className={styles.card} key={character.id}>
            <Link to = {`${CHARACTER_BY_ID_URL} ${character.id}`}>
            <Card 
              name = {character.name}
              image = {character.image}
              species = {character.species}
              gender = {character.gender}
              episode = {character.episode}
            />
            </Link>
          </div>
      ))}
    </div>
  );
};
