const express = require('express');
const stripe = require('stripe')('sk_test_51NdTb7SFU9zAg0XJcDjPyegHsnL7z2n9b2GURqMPP9pOGdoxlQwdQ0CvLPYAd2AGoUVplqyPtzFF1QT3TfZz8uJa00djwn4xtW')

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {


  // const line_items = req.body.plan.map((plan)=>{
  //   return {
  //     price_data: {
  //       currency: 'inr',
  //       product_data: {
  //         name: plan.Resolution,
  //       },
  //       unit_amount: plan.monthly,
  //     },
  //     quantity: 1,
  //   }
  // })

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name:  req.body.plan.Resolution,
          },
          unit_amount:  req.body.plan.monthly,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    // need to update url's
    success_url: 'http://localhost:80/success',
    cancel_url: 'http://localhost:80/cancel',
  });

  res.redirect({url:session.url});
});

module.exports = router