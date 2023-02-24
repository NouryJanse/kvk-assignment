import styled from 'styled-components'

export const InputStyle = styled.input`
  display: flex;
  color: black;
  border: 1px solid #757575;
  padding: 12px;
  transition: padding 200ms ease-in-out;
  outline: 0;
  width: 99%;
  border-radius: 8px;

  &:focus {
    padding-left: 16px;
  }
`

export const FieldRowStyle = styled.div`
  width: 320px;
`

export const LabelStyle = styled.label`
  margin-bottom: 8px;
  color: black;
  display: flex;
`
