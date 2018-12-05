import React from 'react'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';

const App = () => (
  <div>
    <AppBar style={{height: "100px"}}>    
      sup
      
    </AppBar>
    {/* <Menu style={{top: "100px"}}>
        menu
    </Menu>  */}
    <Button href="http://localhost:3000" style={{top: "50px"}}>
      Hi
    </Button>
  </div>
)

export default App
