import styled from 'styled-components'
import {Card} from 'antd'
export const CardStyle=styled.div<{type}>`

&.card {
  height:   ${props => props.type==='sm'?"100px":props.type==='md'?"300px":props.type==='lg'?"80vh":"300px"}  ;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin-bottom: 10px;
}

h3 {
  color: white;
  font-size: 24px;
  margin: 20px 0 0 20px;

}

p {
  color: white;
  font-weight: 400;
  font-size: 16px;
  align-self: end;
  margin: 0 0 20px 20px;
  letter-spacing: 0.5px;
}

img {
  position: absolute;
  top: 0;
  height: 110%;
  width: 100%;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card:hover {
  transform: scale(1.035, 1.035);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.card:hover img {
  transform: translateY(-10px);
}

`;
