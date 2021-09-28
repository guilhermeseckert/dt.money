import { Container } from "./styles";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p> Income</p>
          <img src={inComeImg} alt="incomeImg" />
        </header>
        <strong>$1000</strong>
      </div>
      <div>
        <header>
          <p> outcome</p>
          <img src={outComeImg} alt="outcomeImg" />
        </header>
        <strong> - $100</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p> Total</p>
          <img src={totalImg} alt="totalImg" />
        </header>
        <strong>$1300</strong>
      </div>
    </Container>
  );
}
