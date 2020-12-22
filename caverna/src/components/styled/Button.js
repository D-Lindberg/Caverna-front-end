import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#282c34" : "#33aced"};
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 4px;
`
export default Button