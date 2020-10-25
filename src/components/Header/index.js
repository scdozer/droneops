import React from "react"
import Menu from "./Menu"
import { Flex, Container } from "../../styles/globalStyles"
import { Logo, Navigation, HeaderContainer } from "./styles.js"
import { Link } from "gatsby"
// import mainVideo from './mainloop.mov';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Flex spaceBetween>
          <Link to={"/"}>
            <Logo>Drone Ops LLC</Logo>
          </Link>
          <Navigation>
            <Menu />
          </Navigation>
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
