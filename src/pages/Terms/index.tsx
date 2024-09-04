import { Container, TermsInfo } from "./styles";

function TermsPage() {
  return (
    <Container id="about-container">
      <TermsInfo>
        <h2>Terms</h2>
        <p>
          This is an open source project for public use and is under the MIT license.
          For more information, visit:
        </p>
        <a href="https://github.com/VitorHugoAntunes/React_forum/blob/development/LICENSE" target="_blank">License</a>
      </TermsInfo>
    </Container>
  )
}

export default TermsPage;
