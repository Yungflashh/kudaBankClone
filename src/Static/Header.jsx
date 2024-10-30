import styled from "styled-components"
import kudaLogo from "../assets/kudaLogo.png"
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <NavHeader>
            <LogoLinksNav>
                <Logo>
                    <img src={kudaLogo} alt="KudaLogo" />
                </Logo>

                <NavLinks>
                        <nav>
                           <Link to={"/Personal"} className="link-styles">Personal</Link> 
                            <MdArrowDropDown/>
                        </nav>
                        <nav>
                            Business
                            <MdArrowDropDown/>
                        </nav>
                        <nav>
                            Company
                            <MdArrowDropDown/>
                            </nav>
                        <nav>
                            Help
                        <MdArrowDropDown/>
                        </nav>

                        

                </NavLinks>

                </LogoLinksNav>

                <ActionBtn>
                        <nav>SIgn In</nav>
                        <button>Join Kuda</button>

                </ActionBtn>
                <nav>Country</nav>


        </NavHeader>
    </>
  )
}

export default Header


const NavHeader = styled.div`
    /* background-color: red; */
    width: 100%;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    color: #40196D;
    font-family: "Mulish", serif;
    font-weight: 600;
    box-shadow: 0px 0px 2px rgba(0,1,1,0.3);
`

const NavLinks = styled.div`
display:flex;
align-items:center;
font-size: 13px;
line-height: 18px;
gap: 30px;

@media (max-width:900px){
    display: none;
}
nav{
    display: flex;
    align-items: center;
   
}

.link-styles{
    text-decoration:none
}

    
`

const Logo = styled.div`
img{
    width: 80px;
}
    
`

const ActionBtn = styled.div`
    display:flex;
    margin-right: 50px;
    gap: 30px;
    align-items: center;
    font-size: 14px;
    @media (max-width:900px){
    display: none;
}
    button{
        background: #40196D;
        color: white;
        line-height: 13px;
        font-size: 13px;
        border-radius: 10px;
        padding: 15px;
        width: 120px;
        border: none;
        outline: none;
    }
`

const LogoLinksNav = styled.div`
    display: flex;
    margin-left: 30px;
    gap:100px;
`