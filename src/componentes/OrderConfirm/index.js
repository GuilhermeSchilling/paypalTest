import Order from '../Order'
import styles from './OrderConfirm.module.css'
const OrderConfirm = (props) =>{
    return(
       
        <aside className={styles.order}>
            {props.orders.map(order => <Order firstName={order.firstName} lastName={order.lastName} email={order.email} phone={order.phone} country={order.country} state={order.state} zip={order.zip} street={order.street}/>)}
        </aside>
    )
}

export default OrderConfirm