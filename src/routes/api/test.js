const express = require("express");

const router = express.Router();
// const User = require(""); //user model
const url = require("url");

// /api/test/pay
router.post("/payme", (req, res) => {
  data.buyer_name = req.body.buyer_name;
  data.ReturnURL = req.body.ReturnURL;
  data.email = req.body.email;
  data.phone = req.body.phone;

  const responseData = JSON.parse(res);
  console.log(responseData);

  // /*******Payment redirection link  *********/
  //I need to know where is the redirection link where the user will enter his card number
});
router.get("/callback/", (req, res) => {
  let url_parts = url.parse(req.url, true),
    responseData = url_parts.query;
  console.log(responseData);
  if (responseData.SecureHash) {
    let userId = responseData.user_id;

    User.findOneAndUpdate({ _id: userId }).then((user) => res.json(user));
    // Redirect the user to payment complete page.
    return res.redirect("http://localhost:3000/payment-complete");
  }
});
// Redirect the user to payment complete page.
// return res.redirect("http://localhost:3000/payment-complete");

module.exports = router;
