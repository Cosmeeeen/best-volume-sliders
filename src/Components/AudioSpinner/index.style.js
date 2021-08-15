import styled from 'styled-components';

export const AudioSpinnerContainer = styled.div`
color: #ecf0f1;
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
