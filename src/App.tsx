import { useState } from 'react';
import { AreaContent, Container, Header } from './App.styles';
import { Item } from './types/list-item';
import { ListItem } from './components/ListItem';
import { AddInput } from './components/AddInput';

const App = () => {
  /**
   * No typescript é possível definir um padrão de valores que repassado para o estado
   * Nesse caso estamos criando uma lista que recebe uma lista de objetos
   * ex do modelo: [{ id, tarefa, boolean }]
   *
   * Para esse caso definimos um type do TS para tipar a lista de acordo com o padrão que
   * deve receber a atividade
   */
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar React', done: false },
    { id: 2, name: 'Estudar Vue', done: false },
    { id: 2, name: 'Estudar NestJS', done: true },
  ])

  const handleAddTask = (taskName: string) => {
    // primeiro clona a lista
    let newList = [...list]

    // faz um push da task
    newList.push({
      id: list.length + 1, // gerando um id baseado no length da lista
      name: taskName,
      done: false
    })

    // adiciona na lista nova
    setList(newList)
  }

  return (
    <Container>
      <AreaContent>
        <Header>
          Lista de Tarefas
        </Header>
        <AddInput onEnterPress={handleAddTask} />
        <ul>
          {
            list.map(item => (
              <ListItem key={item.id} item={item}/>
            ))
          }
        </ul>
      </AreaContent>
    </Container>
  )
}

export default App;
