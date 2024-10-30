import styled from "styled-components"
import Button from "./Button"
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi"
import phoneKuda from "../assets/svg/phoneKuda.svg"
import spin from "../assets/svg/spin.svg"


const HeroSection = () => {
  return (
    <>
    <Container>
        <HeroText>
                    <h2>The money app for Africans.</h2>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>

                    <ButtonDiv>
                    <Button icon = {<FaApple  size={30}/>} TopText={"Download on the"} BottomText={"AppStore"}/>
                    <Button icon = {<BiLogoPlayStore size={30} />} TopText={"Get it on"} BottomText={"Google Play"}/>

                    </ButtonDiv>
                   
        </HeroText>



        <HeroImg>
                <img className="spin2" src={spin} alt="" />
                <img className="spin" src={phoneKuda} alt="" />
                

        </HeroImg>

        </Container>
    </>
  )
}

export default HeroSection
const Container = styled.div`
overflow-x: hidden;
overflow-y: hidden;
width: 100%;
    display : flex;
    justify-content: space-between;
    position: relative;
   
    @media (max-width:900px){
        /* border: 3px solid red; */
        flex-direction: column;
        height: auto;
        align-items: center;
    }

`

const HeroText = styled.div`
display: flex;
flex-direction: column;
margin:70px 200px;

width: 300px;

@media (max-width:900px){
        width: 100%;
        align-items: center;
        margin: 0px 0px 100px 0px;
        width: 100%;
        /* border: 3px solid green; */
}
h2{
    color: rgb(64, 25,109);
    font-size: 42px;
    line-height: 48px;
    font-weight: 900;
    @media (max-width:900px) {
        width: 60%;
        text-align: center;
        margin-top: 80px;
    }
}
    
p{
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
    margin-top: -20px;

    @media (max-width:900px) {
        width: 70%;
    }
}
`

const HeroImg = styled.div`
position: relative; /* Set the parent container to relative */
    width: 100%; /* Ensure it takes full width */
    height: 100vh; /* Full height of the viewport */
    display: flex; /* Use flex to center content */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */




.spin2{
    position: absolute;
    width: 400px;
    right: 100px;
    top: 50px;
    animation: rotate 5s linear infinite; /* Animation properties */
    @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }

    
}

@media (max-width:900px){
      width: 300px;
      position: absolute;
      top: 40px;
      /* border: 2px solid red; */
      left: 50px;
     
    }
}

.spin{
    position: absolute;
    top: 50px;
    right: 90px;
    width: 400px;
    /* border: 2px solid green; */

   

    
}

@media (max-width:900px){
       .spin{
       
        position: absolute; /* Position absolutely within the container */
    width: 400px; /* Set width */
    left: 50%; /* Move to the center horizontally */
    top: 20%; /* Move to the center vertically */
    transform: translate(-50%, -50%); /* Adjust to center */


       }
    }

box-sizing: border-box;
`

const ButtonDiv = styled.div`
    display: flex;
    gap: 15px;

    button{
        background: #000000;
        color: white;
        border-radius: 10px;
        border: none;

    


    }
`