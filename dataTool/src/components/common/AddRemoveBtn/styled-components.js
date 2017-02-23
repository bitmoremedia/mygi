import styled from 'styled-components';

export const Button2 = styled.button`
  background-color: ${props => props.type  === 'add' ? 'green' : 'red'};
  color: white;
  cursor: pointer;
  border-radius: 1px;
  border: 0px;
  padding: 0px;
  font-size: 12px;
  padding: 1px 3px 0px 3px;
  &:focus {
      outline:none;
  }
`;

export const Button = styled.span`
  color: ${props => props.type  === 'add' ? 'green' : 'red'};
  cursor: pointer;
`;
