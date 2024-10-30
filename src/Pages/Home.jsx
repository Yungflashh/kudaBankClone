import "../components/Testimonial.css"
import Card from "../components/Card"
import HeroSection from "../components/HeroSection"
import order from "../assets/png/order.jpg"
import moonIcon from "../assets/png/moonIcon.jpg"
import law from "../assets/png/law.jpg"
import transfer from "../assets/png/transfer.jpg"
import save from "../assets/png/save.jpg"
import styled from "styled-components";
import CardImg from "../components/CardImg"
import lady from "../assets/png/lady.jpg"
import ladyMoney from "../assets/png/ladyMoney.jpg"
import kudaCard from "../assets/png/kudaCard.jpg"
import micGuy from "../assets/png/micGuy.jpg"
import moneyJar from "../assets/png/moneyJar.jpg"
import Testiomnial from "../components/Testiomnial"
import babaJide from "../assets/svg/babajide.svg"
import muhammud from "../assets/svg/muhammad.svg"


const Home = () => {
  return (
    <>
        <HeroSection />

        <CardContainer>

          <div className="card1">
          <Card icon = {order} cardContent={"Order a Kuda card on the app with pickup and delivery options."}/>
        <Card icon = {moonIcon} cardContent={"Enjoy cashless payment options online and offline."}/>
        <Card icon ={law} cardContent={"Pay your essential bills and buy gift cards easily."}/>

          </div>
     

        <div className="card2">

        <Card icon ={transfer} cardContent={"Get 25 free transfers to Nigerian banks every month."}/>
        <Card icon ={save} cardContent={"Save money automatically any time you spend."}/>

        </div>
       

        </CardContainer>


        <CardIMageContainer>


                  <Wrapper>
                  <CardImg header={"Your phone + our app + a debit card = a simpler life."} desc={"We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."} anchor={"open an account in Minutes"} img={lady} />

                  </Wrapper>
             

        </CardIMageContainer>


        <CardIMageContainer>
          <Wrapper>
          <CardImg header={"Save money as you spend it, seriously."} desc={"You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."} anchor={"See all our Savings "} img={ladyMoney} />


          </Wrapper>
             

        </CardIMageContainer>


        <CardIMageContainer>
          <Wrapper>
          <CardImg header={"Turn off access, turn on safety."} desc={"Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."} anchor={"Larn more about our cards"} img={kudaCard} />


          </Wrapper>
             

        </CardIMageContainer>


        <CardIMageContainer>
          <Wrapper>
          <CardImg header={"We’re always happy to help you."} desc={"You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."} anchor={"Get Help"} img={micGuy} />


          </Wrapper>
             

        </CardIMageContainer>


        <CardIMageContainer>
          <Wrapper>
          <CardImg header={"Fees as clear as glass."} desc={"We’re serious about free banking, and we will never, ever charge you for anything without your consent."} anchor={"See all our fees"} img={moneyJar} />


          </Wrapper>
             

        </CardIMageContainer>


        <div className="testimonial-container">
              <Testiomnial text={"Never thought an app would stylish become my everyday way to bank and have access to physical cash.@kudabank is sleek"} img={babaJide} username={"BabaJide"} />
              <Testiomnial text={"Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah"} img={muhammud} username={"Muhammud Kudu"} />
              <Testiomnial text={"Never thought an app would stylish become my everyday way to bank and have access to physical cash.@kudabank is sleek"} img={babaJide} username={"BabaJide"} />
              <Testiomnial text={"Never thought an app would stylish become my everyday way to bank and have access to physical cash.@kudabank is sleek"} img={babaJide} username={"BabaJide"} />



        </div>
    </>
  )
}

export default Home


const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 900px;
  height: 300px;
  margin: 150px auto;
  /* border: 2px solid red; */

  @media (max-width:900px){
    flex-direction: column;
    width: 100%;
    margin-bottom: 600px;
  
  }


  .card1{
    display: flex;
    gap: 40px;
    margin: 20px auto;

    @media (max-width:900px){
    flex-direction: column;
    margin: 0px;
    justify-content: center;
    align-items: center;
    
  }

  }
  .card2{
    display: flex;
    gap: 40px;
    margin: 20px auto;

    @media (max-width:900px){
    flex-direction: column;
    margin: 0px;
    justify-content: center;
    align-items: center;
  }

  }
`

const CardIMageContainer = styled.div`
  width: 100%;
  /* border: 5px solid yellow; */
  
  @media (max-width:900px){
    flex-direction: column;
    margin: 0px;
    justify-content: center;
    align-items: center;
  }

`

const Wrapper = styled.div`
  /* border: 5px solid blue; */
  width: 900px;
  /* padding-left: 30px; */
  margin: auto;
  display: flex;
  justify-content: space-between;

  
  @media (max-width:900px){
    flex-direction: column;
    width: 100%;
    /* margin: 0px; */
    /* justify-content: center; */
    /* align-items: center; */


    img{
      width: 100%;
    }
  }

  

`