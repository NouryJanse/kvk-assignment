import tw from 'tailwind-styled-components'

const StyledCompanyTile = tw.div`
  mb-2
  hover:pl-6
  hover:pr-6
  transition-all
  shadow-lg
  p-4
  rounded-lg
  border-b-4
  border-b-orange
  flex
  flex-row
  justify-between
  cursor-pointer
  lg:max-w-3xl
`

export default StyledCompanyTile
