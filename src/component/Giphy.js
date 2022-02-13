import React, { useEffect, useState } from "react";
import { Card, DropdownButton, Row, Col } from "react-bootstrap";

function Giphy() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("trending");
 
  const [allPost, setAllpost] = useState([]);

  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7&limit=12`;
    let data = await fetch(url);

    let parsedData = await data.json();
    let gifsData = await parsedData;

    console.log(gifsData.data);
    setGifs(gifsData.data);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleGif = (item) => {
    
    setAllpost((prev) => {
      return [...prev, item.images.original.url];
    });
    console.log(allPost);
  };

  return (
    <div>
      {allPost.map((item) => {
        return (
          <Card.Img
            key={item.id+1}
            className="my-3 mx-1"
            style={{ width: "8rem" }}
            src={item}
          />
        );
      })}

      <DropdownButton
        id="dropdown-basic-button"
        className="mx-2"
        title=" Giphy"
      >
        <Card
          className="my-1"
          style={{ width: "30rem", height: "18rem", overflow: "scroll" }}
        >
          <input
            placeholder="Search-Gifs"
            className="my-3 mx-3"
            onChange={handleSearch}
          ></input>

          <Row>
            {gifs.map((item) => (
              <Col sm={4} md={4} lg={4} xs={4} key={item.id}>
                <Card.Img

                  className="mx-1"
                  variant="top"
                  onClick={() => handleGif(item)}
                  src={item.images.original.url}
                />
              </Col>
            ))}
          </Row>
        </Card>
      </DropdownButton>
    </div>
  );
}

export default Giphy;
