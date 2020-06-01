import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios/index";

export class Payme extends Component {
  onPayNowClick = () => {
    const { user } = this.props;
    console.log("tessssssssssssst");
    console.log(user);

    const data = {
      PAN: "5078036202274569",
      DateExpiration: "2309",
      cvv2: "544",
      AmountTrxn: 10000,
      CurrencyCodeTrxn: 818,
      IsWebRequest: true,
      MerchantReference: "19102013103020",
      MerchantId: "10300000017",
      TerminalId: "100057",
      DateTimeLocalTrxn: "19102013103020",
      SecureHash:
        "7ac90a8e59a0ebe2508c28972fed9f4bf73dfdcbf9a2b8ead6aeded8a025ff0c",
      email: "bassemyoussef@hotmail.com",
      CardHolderName: "Bassem Youssef",
      EComIp: "192.45.65.98",
      MobileNo: "01279221694",
      Disable3DS: false,
      purpose: "Payment",
      amount: "100",
      buyer_name: this.props.user.name,
      user_id: this.props.user.id,
      ReturnURL: `http://localhost:5000/api/test/callback?user_id=${this.props.user.id}`,
    };
    try {
      const response = axios.post("/api/test/payme/", { data }).then((res) => {
        console.log("resp", res.data);
        window.location.href = res.data;
      });
      console.log(" Returned data:", response);
    } catch (e) {
      console.log(` Axios request failed: ${e}`);
    }
    // axios
    //   .post("/api/test/pay/", data)
    //   .then((res) => {
    //     console.log("resp", res.data);
    //     window.location.href = res.data;
    //   })
    //   .catch((error) => console.log(error.response.data));
  };

  render() {
    const { user } = this.props.user;

    return (
      <div>
        <div>
          <button
            style={{ background: "#2AFCCB" }}
            onClick={this.onPayNowClick}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  }
}

Payme.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Payme);
