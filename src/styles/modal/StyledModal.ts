import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  background-color: white;
  opacity: ${(props: { opacity: string }) => props.opacity};
  transition : all 0.3s ease-in-out;`;

export default StyledModal;
