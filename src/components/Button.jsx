import styled from "styled-components"

const Button = ({icon,TopText, BottomText}) => {
  return (
    <Div>
            <button className="btn">
                {icon}
                    <div className="btnText">
                        <> {TopText} </> <br />
                        <>{BottomText}</>
                    </div>
               
            </button>
    
    </Div>
  )
}

export default Button

const Div = styled.div`
    button{
        display: flex;
        height: 40px;
        text-align: center;
        width: 170px;
        align-items : center;
        gap: 5px;
        justify-content: center;


       
       


       
    }

    @media (max-width:900px){

button{
          width: 120px;
          font-size: 10px;
      }

}

`