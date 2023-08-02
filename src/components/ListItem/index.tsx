import { useState } from "react";
import { Item } from "../../types/list-item";
import { Container } from "./styles"

/**
 * Para criar uma prop em React utilziando o TS é importante criar um type
 * ou interface que receba os tipos do que é repassado naquela propriedade.
 * Nesse caso estamos repassando para a prop "item" o type Item, pois ela
 * contem os dados que desejamos receber para a nossa lista de tarefas.
 */
interface PropsList {
  item: Item; /* contem id, name, done */
}

export const ListItem = ({ item }: PropsList) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const onChanged = (value: boolean) => setIsChecked(value);

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => onChanged(e.target.checked)}
      />
      <label>{ item.name }</label>
    </Container>
  )
}
