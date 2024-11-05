import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import { Link, useParams } from 'react-router-dom'

const Message = ({status}) => {

    const {name} = useParams()
  return (
    <>
    <Nav />
    {status === 'order' &&
    <div style={{display:'flex',flexDirection:"column",alignItems:'center',padding:"30px",gap:"15px"}}>
        <p>Your Order / {name} / Is Confirmed</p>
        <p>Thanks for choosing us,and we look forward to welcoming you soon</p>
        <Link to='/'><button style={{backgroundColor:"orange",border:'none',padding:'5px',width:"200px",cursor:"pointer"}}>Back to home</button></Link>
    </div>
    }
     {status === 'feedback' &&
    <div style={{display:'flex',flexDirection:"column",alignItems:'center',padding:"30px",gap:"15px"}}>
        <p>Thank you for your valuable feedback</p>
        <p>We appreciate your input and look forward to serving you again</p>
        <Link to='/'><button style={{backgroundColor:"orange",border:'none',padding:'5px',width:"200px",cursor:"pointer"}}>Back to home</button></Link>
    </div>
    }
     {status === 'booking' &&
    <div style={{display:'flex',flexDirection:"column",alignItems:'center',padding:"30px",gap:"15px"}}>
        <p>Your Booking Is Confirmed</p>
        <p>Thanks for choosing us,and we look forward to welcoming you soon</p>
        <Link to='/'><button style={{backgroundColor:"orange",border:'none',padding:'5px',width:"200px",cursor:"pointer"}}>Back to home</button></Link>
    </div>
    }
    <Footer />
    </>
  )
}

export default Message