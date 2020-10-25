import styled from "styled-components"

export const FullContainer = styled.div`
  text-align: center;
  background: #eee;
  padding: 20px 40px 40px 40px;
`

export const Content = styled.div`
  font-size: 16px;
  line-height: 30px;
`
export const Button = styled.a`
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  background: #dd6b20;
  padding: 15px 25px;
  color: #fff;
  text-decoration: none;
  &:hover {
    filter: brightness(85%);
  }
  h1 {
    color: red;
  }
`
