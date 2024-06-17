import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon } from '@/components/auth/provider-icons'

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
]

export const ProviderButtonGroup = (prop) => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button
        as={'a'}
        href={'#'}
        key={name} 
        flexGrow={1}
        gap={2}
        fontSize={'sm'}
        fontWeight={500}
        color={'brand.900'}
        borderRadius={'4px'}
        border={'1px solid'}
        borderColor={'brand.900'}
      >
        {icon}
        {prop.prefix} {name}
      </Button>
    ))}
  </ButtonGroup>
)