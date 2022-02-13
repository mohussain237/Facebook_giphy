import { Container } from "react-bootstrap";
import Giphy from "./component/Giphy";
import Post from "./component/Post";

function App() {
  return (
    <Container style={{ width: "50rem" }}>
     
      <Post />
      <Giphy />


    
    </Container>
  );
}

export default App;

// Api_key : qVzmWVnzDkxRAUbP56SqAv2R9E9qspW8
