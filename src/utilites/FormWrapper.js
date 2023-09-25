import styles from './FormWrapper.module.css'

export const FormWrapper = (props) => {
    return <div className={styles.wrapper}>{props.children}</div>
}