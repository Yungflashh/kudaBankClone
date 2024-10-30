import styled from "styled-components"
const CardImg = ({header,desc,anchor,img}) => {
  return (
    <Container>
        <div className="card-text">
                <h3>{header}</h3>
                <p>{desc}</p>
                <a href="">{anchor}</a>


        </div>

        <div className="card-img">

            <img src={img} alt="an image" />

        </div>
    </Container>
  )
}

export default CardImg

const Container = styled.div`
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    width: 100%;
    gap: 80px;
    color: rgb(64, 25, 109);

    @media (max-width:900px){
        width: 100%;
        flex-direction: column;
        /* border: 2px solid pink; */
        margin-bottom: 50px;

        


    }

    .card-text{
        width: 400px;

        @media (max-width:900px){
            width: 100%;
            text-align: center;
            /* border: 3px solid green; */
        
        }
    }

    h3{
        font-size: 32px;
        font-weight: 900;
        line-height: 43px;
    }

    p{
        font-size: 14px;
        color: black;
        line-height: 21px;
        font-weight: 400;

        @media (max-width:900px){
            font-size: 20px;
            width: 100%;
        }

    }

    a{
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
    }
`
