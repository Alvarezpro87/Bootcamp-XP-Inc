import Input from './components/Input';
import Button from './components/Buttons';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (label) => {
    setInputValue(prev => {
      
      if (prev === '0' && !isNaN(label)) {
        return label;
      }
      
      return prev + label;
    });
  };

  const handleOperatorClick = (op) => {
    setFirstValue(Number(inputValue)); 
    setInputValue('0'); 
    setOperator(op); 
  };

  const handleEqualClick = () => {
    if (operator && firstValue !== null) {
      const secondValue = Number(inputValue);
      let result;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case 'x':
          result = firstValue * secondValue;
          break;
        case '÷':
          result = firstValue / secondValue;
          break;
        default:
          return;
      }

      setInputValue(String(result));
      setFirstValue(null);
      setOperator(null);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={inputValue} />
        <Row>
          <Button label="x" onClick={() => handleOperatorClick('x')} color="#00A3FF" />
          <Button label="÷" onClick={() => handleOperatorClick('÷')} color="#00A3FF" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="-" onClick={() => handleOperatorClick('-')} color="#00A3FF" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="+" onClick={() => handleOperatorClick('+')} color="#00A3FF" />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="=" onClick={handleEqualClick} color="#FF9500" />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="C" onClick={() => setInputValue('0')} color="#FF0000" />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
