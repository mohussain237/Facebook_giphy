import { Form, Button, DropdownButton, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Giphy from "./Giphy";

function Post(props) {
  const [postname, setPostname] = useState("");
  const [allPost, setAllpost] = useState([]);

  function changeHandler(e) {
    setPostname(e.target.value);
  }

  

  function handleSubmit(e) {
    e.preventDefault();

    if (!postname) {
    } else {
      setAllpost((prev) => {
        return [...prev, postname];
      });
    }

    setPostname("");
  }

  return (
    <>
      <Form className="container mt-5">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            onChange={changeHandler}
            value={postname}
            placeholder="Write Massage "
          />
        </Form.Group>

        <Button as="input"  className='mb-2'onClick={handleSubmit} type="submit" value="Post"/>

      
      </Form>

      <ListGroup variant="flush" className="container my-20">
        {allPost.map((item) => {
          return <ListGroup.Item> {item} </ListGroup.Item>;
        })}
      </ListGroup>
    </>
  );
}

export default Post;
