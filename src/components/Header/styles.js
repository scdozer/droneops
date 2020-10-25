import styled from "styled-components"

export const HeaderContainer = styled.div`
  z-index: 20000;
  // background: rgba(0, 0, 0, 0.5);
  background: white;
  padding: 15px 0px;
  a {
    text-decoration: none;
  }
`

export const HeaderStuff = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const Logo = styled.div`
  color: #dd6b20;
  font-size: 22px;
  font-weight: 600;
  line-height: 45px;
  text-decoration: none;
  a {
    text-decoration: none;
  }
`

export const Navigation = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 300;
  line-height: 45px;
  a {
    text-decoration: none;
    color: black;
    padding-left: 20px;
  }
  a:hover {
    color: #ea281e;
  }
  @media (max-width: 950px) {
    font-size: 16px;
    line-height: 25px;
    a {
      padding-left: 10px;
    }
  }
`
