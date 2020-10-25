import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import Fade from "react-reveal/Fade"
import { FooterContent, FooterContainer } from "./styles"

const Footer = () => (
  <FooterContainer>
    <Container>
      <Flex spaceBetween>
        <FooterContent>
          <Fade bottom distance="50px">
            <a href="tel:7817100346">(781) 710-0346</a>
            <a href="mailto:ebowden@droneopsco.com">EBowden@DroneOpsCo.com</a>
          </Fade>
        </FooterContent>
      </Flex>
    </Container>
  </FooterContainer>
)

export default Footer
