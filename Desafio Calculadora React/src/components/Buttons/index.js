import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, color }) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
