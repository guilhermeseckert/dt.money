import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
      <Container>
        <h2>New Transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={inComeImg} alt="Incoming" />
            <span>Income</span>
          </button>
          <button type="button">
            <img src={outComeImg} alt="Outcome" />
            <span>Outcome</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
