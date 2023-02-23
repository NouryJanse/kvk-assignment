import React, { ChangeEventHandler, ReactElement } from 'react'
import { FieldRowStyle, LabelStyle, InputStyle } from './styled'

// import { ErrorMessage } from '../../../index'

type TextFieldProps = {
  name: string
  label: string
  placeholder: string
  defaultValue?: string
  onChange?: ChangeEventHandler
}

const Textfield: React.FC<TextFieldProps> = ({
  name = '',
  label = '',
  placeholder = '',
  defaultValue = '',
  onChange,
}): ReactElement => {
  return (
    <FieldRowStyle>
      <LabelStyle htmlFor={name}>{label}</LabelStyle>

      <InputStyle
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FieldRowStyle>
  )
}

Textfield.defaultProps = {
  defaultValue: '',
  onChange: (): boolean => {
    return true
  },
}

export default Textfield
