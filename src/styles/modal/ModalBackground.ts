import styled from 'styled-components';
import { BaseModalBackground } from 'styled-react-modal';

const ModalBackground = styled(BaseModalBackground)`
  opacity: ${(props: { opacity: string }) => props.opacity};
  transition: all 0.3s ease-in-out;
  z-index: 99999;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ModalBackground;
