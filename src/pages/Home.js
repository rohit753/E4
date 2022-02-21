import React from 'react'
import styled from 'styled-components';
import { useNavigate} from "react-router-dom"


const Container = styled.div`
margin-top: 10%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Input = styled.input`
width: 20vw;
margin-top: 20px;
height: 4vh;

`


const Home = () =>
{
    const nav = useNavigate();
    
    const handleenter = () => {
      //axios
        // alert("hvutf")
     nav("/search");
    };


  return (
    <Container>
      <div>
        <img
          src="https://www.fh.org/wp-content/uploads/2018/09/google-icon.png"
          alt=""
        />
      </div>
          <Input type="text" placeholder="Search google" className="search-box" onKeyPress={(e) =>
          { 
              if (e.key === "Enter")
              { 
                  handleenter();
              }
          }}/>
    </Container>
  );
}

export default Home