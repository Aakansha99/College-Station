import React from 'react'
import {AppBar,Typography,Container,Toolbar} from '@material-ui/core'

function Footer() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography  variant="body1" color="inherit" style={{margin: "auto"}} >
              &copy; 2021 Solution Challenge
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
}

export default Footer
