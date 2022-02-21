// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
margin: 50px;
background-color: gray;
height: 100vh;
padding: 20px;
`
 const Card = styled.div`
   width: 40vw;
   height: 30vh;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   text-align: left;
   margin-left: 20px;
   background-color: lightgray;
   margin-top: 20px;
   padding: 20px;
 `;
 const Url = styled.p`
   color: gray;
   margin-top: 0;
   margin-bottom: 0;
 `;
 const TitleDiv = styled.div`
   margin: 0;
   padding: 0;
   display: flex;
   /* background-color: aqua; */
   width: 10vw;
   justify-content: space-between;
   align-items: center;
 `;
 const Textresult = styled.p`
   color: gray;
   margin-top: 0;
   margin-bottom: 0;
 `;
 const CreDiv = styled.div``;
 const Extradiv = styled.div`
   display: flex;
   align-items: center;
 `;
const H3 = styled.h3`
 color: blue;
 text-decoration:underline ;
 cursor: pointer;
 `
    

const IndiRes = () => {
  return (
    <Container>
      <Card className="result " id="detailed-result">
        <Url>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Url>
        <TitleDiv>
          <H3 className="title">Title</H3>
          <span>|</span>
          <h3 className="author">Author</h3>
        </TitleDiv>
        <Textresult className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          earum veniam voluptas velit optio nostrum esse iusto ratione! Aperiam
          veniam vel ab debitis ullam repellat dolorem ut provident quasi!
          Possimus?
        </Textresult>
        <CreDiv>
          <span className="creation-date">Creation Date : 20/20/20</span>
          {/* <span></span> */}
        </CreDiv>
        <Extradiv>
          <span className="explicit">Explicit: yes/np</span>
          <span className="quality">Quality %:23</span>
        </Extradiv>
      </Card>
    </Container>
  );
}

export default IndiRes