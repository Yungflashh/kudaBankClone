import styled from "styled-components"

const Card = ({icon, cardContent}) => {
  return (
    <Container>
       <img src={icon} alt="an Icon"  />

        <p>{cardContent}</p>

    </Container>
  )
}

export default Card


const Container = styled.div`

box-shadow: 1px 2px 1px rgba(1,1,1,0.5);

    width: 250px;
    height: 100px;
    padding: 20px;
    border-radius: 10px;
    color: #40196D;
    font-weight: 600;

    
    

    
`