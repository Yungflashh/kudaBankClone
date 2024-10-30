import "./Testimonial.css"
const Testiomnial = ({text,username,img}) => {
  return (
    <>


    <div className="testimonial-card">
        <p>{text}</p>

        <div className='profileDiv'>
             <img src={img} alt="an img"/>   
             <p>{username}</p> 
        </div>
        

    
</div>


    </>
  )
}

export default Testiomnial