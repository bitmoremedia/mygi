import styled from 'styled-components'

export const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 1px;
  border: 0px;
  padding: 5px 10px 5px 10px;
  font-size: 14px;
  &:focus {
      outline:none;
  }
`

export const DangerButton = styled(Button)`
  background-color: red;
`
