import { Container, Nav, Navbar } from "react-bootstrap";
import { FaMusic } from "react-icons/fa";

export default function Pagina(props) {
  return (
    <>
      <div>
       
        <Navbar bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/">
          <FaMusic />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/musicas">Musicas</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        
        <div className="bg-dark text-white text-center py-3">
          <h1 className="page-title">{props.titulo}</h1>
        </div>

       
        <Container
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            border: "2px solid black", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            padding: "20px",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          {props.children}
        </Container>
      </div>
    </>
  );
}