import React from 'react'
import axios from 'axios'

function Paybutton(props) {

  const {plan, selectedPlan} = props;

    // const user = {"_id":"e75638r832963"};

    const handleCheckOut =()=>{
      console.log(plan[selectedPlan])
        axios.post(`http://localhost/api/stripe/create-checkout-session`,
          {plan:plan[selectedPlan], user:"345678"}
        ).then((res)=>{
          if(res.data.url){
            window.location.href = res.data.url
          }
        }).catch((err)=>console.log(err))
    }

  return (
    <div>
      <button class="formbold-btn" onClick={()=>handleCheckOut()}> Checkout </button>
    </div>
  )
}

export default Paybutton
