import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const ButtonContainer = styled.button`
  flex: 1;
  height: 60px;
  margin: 5px;
  background-color: ${props => props.color || '#e0e0e0'};
  border: none;
  border-radius: 10px;
  color: ${props => (props.color ? '#fff' : '#000')};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => (props.color ? lighten(0.1, props.color) : '#d5d5d5')};
  }

  &:active {
    background-color: ${props => (props.color ? darken(0.1, props.color) : '#c0c0c0')};
  }
`;
