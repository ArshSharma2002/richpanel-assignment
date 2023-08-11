import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Paybutton from "./Paybutton";

function SubscriptionPlans() {
  const host = "http://localhost";

  const [plans, setPlans] = useState([]);

  // fetching all plans
  const getPlans = async () => {
    // API call for fetching plan .
    const response = await fetch(`${host}/api/subscriptions/getsubscriptions`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setPlans(json);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getPlans();
  }, []);

  const [selectedPlanPeriod, setselectedPlanPeriod] = useState("monthly")

  const [selectedPlan, setselectedPlan] = useState("basic")

  const handleYearly =()=>{
    setselectedPlanPeriod("yearly")
    document.getElementById('yearly').style.cssText = 'background-color: white; color: rgba(30, 76, 144, 1);';
    document.getElementById('monthly').style.cssText = 'background-color: rgba(30, 76, 144, 1); color: white;';
  }
  
  const handleMonthly =()=>{
    setselectedPlanPeriod("monthly")
    document.getElementById('monthly').style.cssText = 'background-color: white; color: rgba(30, 76, 144, 1);';
    document.getElementById('yearly').style.cssText = 'background-color: rgba(30, 76, 144, 1); color: white;';
  }

  const handleOnSelectPlan =(plantype)=>{
    setselectedPlan(plantype)
    console.log(plantype + " is selected. ")
  }

//   const handleCheckOut =(plan)=>{
//     axios.post(`http://localhost/api/stripe/create-checkout-session`,{
//       plan
//     }).then((res)=>{
//       if(res.data.url){
//         window.location.href = res.data.url
//       }
//     }).catch((err)=>console.log(err))
// }

  return (
    <div>
      {plans.map((plan) => (
        <div>
          <div class="subscriptionPlanTable ">
            <h2 style={{textAlign: "center", fontWeight: "600", marginBottom: "10px"}} >Choose the right plan for you</h2>
            <table class="table  center">
              <thead>
                <tr>
                  <th class="text-start">
                    <div class="button-container">
                      <button  id="monthly" class="button  active" onClick={()=>{handleMonthly()}} >Monthly</button>
                      <button id="yearly" class="button" onClick={()=>{handleYearly()}} >Yearly</button>
                    </div>
                  </th>
                  <th>
                    <button class="card-btn" onClick={()=>{handleOnSelectPlan("basic")}} id="basic">
                      Basic
                    </button>
                  </th>
                  <th>
                    <button class="card-btn" onClick={()=>{handleOnSelectPlan("standard")}} id="standard">
                      Standard
                    </button>
                  </th>
                  <th>
                    <button class="card-btn" onClick={()=>{handleOnSelectPlan("Premium")}} id="premium">
                      Premium
                    </button>
                  </th>
                  <th>
                    <button class="card-btn active" onClick={()=>{handleOnSelectPlan("Regular")}} id="regular">
                      regular
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" class="text-start border">
                    {selectedPlanPeriod} price
                  </th>
                  <td class="border">{plan.basic[selectedPlanPeriod]} INR</td>
                  <td class="border">{plan.standard[selectedPlanPeriod]} INR</td>
                  <td class="border">{plan.Premium[selectedPlanPeriod]} INR</td>
                  <td class="border">{plan.Regular[selectedPlanPeriod]} INR</td>
                </tr>
                <tr>
                  <th scope="row" class="text-start border">
                    Video quality
                  </th>
                  <td class="border">{plan.basic["V-quality"]}</td>
                  <td class="border">{plan.standard["V-quality"]}</td>
                  <td class="border">{plan.Premium["V-quality"]}</td>
                  <td class="border">{plan.Regular["V-quality"]}</td>
                </tr>

                <tr>
                  <th scope="row" class="text-start border">
                    Resolution
                  </th>
                  <td class="border">{plan.basic["Resolution"]}</td>
                  <td class="border">{plan.standard["Resolution"]}</td>
                  <td class="border">{plan.Premium["Resolution"]}</td>
                  <td class="border">{plan.Regular["Resolution"]}</td>
                </tr>
                <tr>
                  <th scope="row" class="text-start">
                    Device you can use to watch
                  </th>
                  <td> Phone </td>
                  <td>Phone</td>
                  <td> Phone </td>
                  <td>Phone</td>
                </tr>
                <tr>
                  <th scope="row" class="text-start"></th>
                  <td>Tablet</td>
                  <td>Tablet</td>
                  <td>Tablet </td>
                  <td>Tablet </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start"></th>
                  <td> </td>
                  <td>Comuter</td>
                  <td>Computer </td>
                  <td>Computer </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start"></th>
                  <td></td>
                  <td>TV</td>
                  <td>TV</td>
                  <td>TV</td>
                </tr>
              </tbody>
            </table>
            <div class="plan-select-btn">
              <Paybutton  plan={plan} selectedPlan={selectedPlan} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionPlans;
