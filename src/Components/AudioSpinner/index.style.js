import styled from 'styled-components';

export const AudioSpinnerContainer = styled.div`
color: aqua;
font-size: 100px;
margin: 15px;
.fas{
  transition: .3s all;
}
.fas:hover{
  font-size: 110%;
}
.rotate{
  animation: rotation 2s infinite linear;
}
@keyframes rotation{
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(359deg);
  }
}
`;
