import styles from './Order.module.css'
import tablet from '../imagens/tablet-removebg.png'
import { PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import { useState } from 'react'
const Order = (props) => {
    function gerarNumRand() {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
      }

    var numRand = gerarNumRand();
    const textAlert = 'Thank you to buy with us, this is your Order ID:'
    const [payment, setPayment] = useState(false);
    const sucessMsg = () => {
        setPayment(true);
    }

    if (payment){
        alert(textAlert + numRand)
    };
    return (<div>
        <div className={styles.finalOrder}>
            <div className={styles.info}>
                <h3 className={styles.h3modified}>ORDER TO </h3>

                <div className={styles.data}>
                    <h4>First Name:  {props.firstName}</h4>
                    <h4>Last Name:  {props.lastName}</h4>
                    <h4>E-mail:  {props.email}</h4>
                    <h4>Phone Number:  {props.phone}</h4>
                    <h4>Country:  {props.country}</h4>
                    <h4>State:  {props.state}</h4>
                    <h4>ZIP:  {props.zip}</h4>
                    <h4>Street:  {props.street}</h4>
                </div>
            </div>
            <div className={styles.rightPht}>
                <img className={styles.imgTablet} src={tablet} alt="Tablet" />
                <div className={styles.finalPrice}>Final Price: $49.99</div>
                <PayPalScriptProvider>
                    <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: 49.99
                        },

                        shipping: {
                            name: {
                                full_name: props.firstName,
                            },
                            address: {
                                address_line_1: props.state,
                                address_line_2: props.state,
                                admin_area_1: "-",
                                admin_area_2: "-",
                                postal_code: props.zip,
                                country_code: "US"
                            }
                        },
                        phone: {
                            phone_number: {
                                national_number: "US"
                            }
                        },

                    }],
                });
            }}
             onApprove={async(data, actions) =>{
                 sucessMsg();
             }}
                
            
        />
                </PayPalScriptProvider>
            </div>

        </div>
    </div>
    )
}


export default Order