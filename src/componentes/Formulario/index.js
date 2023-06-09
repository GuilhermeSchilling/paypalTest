import But from "../Buttone";
import CampText from "../CampText";
import styles from './Formulario.module.css'
import tablet from '../imagens/tablet-removebg.png'
import { useState } from "react";
const Formulario = (props) => {
    console.log(props)
    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [email, setEmail] = useState ('')
    const [phone, setPhone] = useState ('')
    const [country, setCountry] = useState ('')
    const [state, setState] = useState ('')
    const [zip, setZip] = useState ('')
    const [street, setStreet] = useState ('')

    const saved = (evento) =>{
        evento.preventDefault()
        props.orderCreate({
            firstName,
            lastName,
            email,
            phone,
            country,
            state,
            zip,
            street,
        })

    }

    return(
        <section className={styles.container}>
            <div className={styles.formimage}>
                <img src={tablet} alt="Tablet Android"/>
                <div className={styles.textImg}>VOLENTEX Tablet 7 Inch Android 11 32GB Storage (Expandable 128GB) 2GB RAM Tablets, Quad Core Processor</div>
                <div className={styles.priceCss}>$49.99</div>
                <input className={styles.amount} label="quantidade" type="number" placeholder="Quantity to Buy"/>
            </div>
            <form onSubmit={saved} className={styles.form}>
                <div className={styles.formheader}>
                    <h1>Complete with your information</h1>
                </div>
                <div className={styles.group}>
                <CampText valor={firstName} changed={valor => setFirstName(valor)} label="FirstName" placeholder="First Name" />
                <CampText valor={lastName} changed={valor => setLastName(valor)} label="LastName" placeholder="Last Name" />
                <CampText valor={email} changed={valor => setEmail(valor)} label="Email" placeholder="Email" />
                <CampText valor={phone} changed={valor => setPhone(valor)} label="Phone" placeholder="Phone" />
                <CampText valor={country} changed={valor => setCountry(valor)} label="Country" placeholder="Country" />
                <CampText valor={state} changed={valor => setState(valor)} label="State" placeholder="State" />
                <CampText valor={zip} changed={valor => setZip(valor)} label="Zip" placeholder="Zip" />
                <CampText valor={street} changed={valor => setStreet(valor)} label="Street" placeholder="Street" />
                </div>
                <But/>
            </form>
        
  










        </section>
    )
}

export default Formulario;