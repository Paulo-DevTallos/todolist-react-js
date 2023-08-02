import { createUseStyles } from 'react-jss';
import { Container } from './styles';
import { KeyboardEvent, useState } from 'react';

const useStyles = createUseStyles({
  icon: {
    color: '#121212',
    fontSize: 15,
    fontWeight: 600,
    marginRight: 5
  }
})

interface AddInputProps {
  onEnterPress: (taskName: string) => void;
}

export const AddInput = ({ onEnterPress }: AddInputProps) => {
  const [inputText, setInputText] = useState('')
  const classes = useStyles();

  const onChangedInputText = (value: string) => setInputText(value);
  /**
   * Pecualiridade do input, apesar de termos o campo dentro de um componente
   * é preciso adicionar a atividade vinda de fora, pois a lista está no component
   * pai, para isso o componente AddInput tem que receber uma function para ao add
   * o item dentro do componente ele execute uma função que chame outra no componente
   * principal.
   */
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnterPress(inputText);
      setInputText('')
      // criar logica que salva o a atividade na localStorage
    }
  }

  return (
    <Container>
      <div className={classes.icon}>➕</div>
      <input
        type="text"
        value={inputText}
        onChange={e => onChangedInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Adicione uma tarefa"
      />
    </Container>
  )
}
