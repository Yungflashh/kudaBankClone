import tc from "../assets/svg/tc.svg"
import wrld from "../assets/svg/wrld.svg"
import fintech from "../assets/svg/fintech.svg"
import bbc from "../assets/svg/bbc.svg"
import cbc from "../assets/svg/cbc.svg"
import euromoney from "../assets/svg/euromoney.svg"
import "../styles/Parteners.css"


const Partners = () => {
  return (
    <div className="partnersDiv">
        <img src={tc} alt="image_icon" />
        <img src={wrld} alt="image_icon" />
        <img src={fintech} alt="image_icon" />
        <img id="bbc" src={bbc} alt="image_icon" />
        <img src={cbc} alt="image_icon" />
        <img src={euromoney} alt="image_icon" />
    </div>
  )
}

export default Partners