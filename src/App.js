import React from "react";
import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./app.css";
function App() {
  const inputId = useRef();
  const inputArtist = useRef();
  const [loadeddata, setdata] = React.useState();
  const [loadeddata2, setdata2] = React.useState();

  async function submithandlerID(e) {
    e.preventDefault();
    // console.log(entered);
    const res = await axios({
      method: "post",
      url: "http://localhost:3500/test/id",
      data: { id: inputId.current.value },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("No data Available");
    }
    console.log(res.data);
    setdata(res.data);
  }

  async function submithandlerArtist(e) {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: "http://localhost:3500/test/artist",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        artist: inputArtist.current.value,
      },
    });
    if (!res) {
      console.log("No Data Avalable");
    }
    console.log(res.data);
    setdata2(res.data);
  }
  return (
    <div className="App">
      <Container className="con">
        <Form onSubmit={submithandlerID}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Id</Form.Label>{" "}
            <Form.Control
              type="number"
              placeholder="number"
              min="1"
              max="500"
              ref={inputId}
            />
            <Form.Text className="text-muted">
              <li>{loadeddata && loadeddata.artist}</li>
              <li> {loadeddata && loadeddata.title}</li>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
        </Form>{" "}
        <Form onSubmit={submithandlerArtist}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Artist</Form.Label>{" "}
            <Form.Control type="text" placeholder="text" ref={inputArtist} />
            <Form.Text className="text-muted">
              <li>{loadeddata2 && loadeddata2.title}</li>
              <li>{loadeddata2 && loadeddata2.id}</li>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default App;
