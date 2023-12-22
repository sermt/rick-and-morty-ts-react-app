import {} from "react";
import CharacterComponent from "./Character";
import { Character } from "../models/api.model";

export default function CharacterList({ characters }: Props) {
 

  const charactersList = characters?.map((character) => (
    <div className="col-md-4" key={character.id}>
      <CharacterComponent character={character} />
    </div>
  ));
  
  return <div className="row">{charactersList}</div>;
}


interface Props {
  readonly characters: Character[];
 }