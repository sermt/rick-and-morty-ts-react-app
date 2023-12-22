import { Character } from "../models/api.model";

interface Props {
  readonly character: Character;
}

export default function CharacterComponent({ character }: Props) {
  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </>
  );
}
