import React, { EventHandler, ReactElement } from 'react'
import ButtonStyle from './styled'

type ButtonProps = {
  type: 'submit' | 'reset' | 'button'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
  label?: string | JSX.Element
  classes?: string
  children?: JSX.Element
  buttonStyle: 'primary' | 'secondary' | 'tertiary'
  noedge: boolean
  fullwidth: boolean
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  label,
  classes,
  children,
  buttonStyle,
  noedge,
  fullwidth,
  disabled,
}): ReactElement => {
  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      $primary={buttonStyle === 'primary'}
      $secondary={buttonStyle === 'secondary'}
      $tertiary={buttonStyle === 'tertiary'}
      $noedge={noedge}
      $fullwidth={fullwidth}
      $disabled={disabled}
    >
      {children ?? children}
      {label ?? label}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  onClick: (): boolean => {
    return true
  },
  children: <div />,
  classes: '',
  label: '',
}

export default Button
