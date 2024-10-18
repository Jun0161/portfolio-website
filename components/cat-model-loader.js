import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CatSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const CatContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-cat"
    m="auto"
    // Make the container smaller by adjusting the width and height
    mt={['-10px', '-40px', '-80px']} 
    mb={['-20px', '-70px', '-100px']} 
    w={[200, 400, 520]} // Reduced size
    h={[200, 400, 520]} // Reduced size
    position="relative"
  >
    {children}
  </Box>
))

CatContainer.displayName = 'CatContainer'

const Loader = () => {
  return (
    <CatContainer>
      <CatSpinner />
    </CatContainer>
  )
}

Loader.displayName = 'Loader'

export default Loader
