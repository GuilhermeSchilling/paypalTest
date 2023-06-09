import styles from './CampText.module.css'
const CampText = (props) => {

    const typed = (evento) => {
        props.changed(evento.target.value)
        
    }

    return (
            <div className={styles.inputbox}>
                <label>{props.label}</label>
                <input value={props.valor} onChange={typed} required placeholder={props.placeholder} />
            </div>
    )
}
export default CampText;