import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


`
const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: start;
margin-top: 20px;

`
const Img = styled.img`
height: 4.5vh;
margin-left: 20px;
`

const Result = () =>
{
    const nav = useNavigate(); 
    const handleclick = () =>
    { 
        nav("/page");
    }

 const handleenter = () => {
   //axios
    //  alert("entered")
     nav("/search");
 };

    const Button = styled.button`

    margin-left: 20px;
    height: 3vh;

    `
    const Input = styled.input`
    margin-left: 20px;
    width: 30%;
    height: 2.7vh;
    `
    const SearchBody = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `
    const Card = styled.div`
    width: 40vw;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;
    background-color :lightgray ;
    margin-top: 20px;
    padding: 20px;

    `
    const Url = styled.p`
    color: gray;
    margin-top: 0;
    margin-bottom: 0;
    `
    const TitleDiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    /* background-color: aqua; */
    width: 10vw;
    justify-content: space-between;
    align-items: center;
    `
    const Textresult = styled.p`
      color: gray;
      margin-top: 0;
      margin-bottom: 0;
    `;
    const CreDiv = styled.div`
    
    `
    const Extradiv = styled.div`
    display: flex;
    align-items: center;
    `
    const H3 = styled.h3`
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    `;

    
    return (
      <Container>
        <Navbar id="navbar">
          <Img
            src="https://www.fh.org/wp-content/uploads/2018/09/google-icon.png"
            alt=""
          />
          <Input
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleenter();
              }
            }}
          />
          <Button name="Search" className="search">
            Search
          </Button>
        </Navbar>

        <SearchBody>
          <div>
            <Button id="sort-alphabetically">Sort A-Z</Button>
            <Button id="sort-alphabetically-desc">Sort Z-A</Button>
            <Button id="sort-by-date">Sort by Date(Asc)</Button>
            <Button id="sort-by-date-desc">Sort by Date(Desc)</Button>
            <Button id="sort-by-quality">Sort by quality(Asc)</Button>
            <Button id="sort-by-quality-desc">Sort by quality(Desc)</Button>
            <Button id="filter-explicit">Filter Explicit</Button>
          </div>
          <div>
            <Card className="result ">
              <Url>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Url>
              <TitleDiv>
                <H3 onClick={handleclick} >Title</H3>
                <span>|</span>
                <h3>Author</h3>
              </TitleDiv>
              <Textresult >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus earum veniam voluptas velit optio nostrum esse iusto ratione! Aperiam veniam vel ab debitis ullam repellat dolorem ut provident quasi! Possimus?</Textresult>
              <CreDiv>
                <span>Creation Date : 20/20/20</span>
                {/* <span></span> */}
              </CreDiv>
              <Extradiv>
                <span>Explicit: yes/np</span>
                <span>Quality %:23</span>
              </Extradiv>
            </Card>
          </div>
        </SearchBody>
      </Container>
    );
}

export default Result