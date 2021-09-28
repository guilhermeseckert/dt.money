import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>website development</td>
            <td className="deposit">$6000</td>
            <td>development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>website development</td>
            <td className="deposit">$6000</td>
            <td>development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>rent</td>
            <td className="withdraw">- $3000</td>
            <td>development</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
