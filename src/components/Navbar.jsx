import {Link} from 'react-router-dom';
import {Stack} from '@mui/material'

import Logo from "../assets/images/perchLogo.png"

const Navbar = () => {
  return (
    <Stack direction ="row"
    justifyContent="space-around" sx ={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} pz="20px">
      
      <Link to ="/">
      <img src = {Logo} alt="logo" style={{width:'272px', height: '272px', margin: '0 20px'}}/>
      </Link>
      <Stack
      direction ="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        
      </Stack>
    </Stack>
  )
}

export default Navbar