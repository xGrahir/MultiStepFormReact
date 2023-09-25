import styles from './SiteHeader.module.css'

export const SiteHeader = (props) => {
    return (
        <div className={styles.header}>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}