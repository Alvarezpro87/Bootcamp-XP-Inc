import { InputContainer } from "./styles";

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input type="text" readOnly value={value} />
    </InputContainer>
  );
};

export default Input;
