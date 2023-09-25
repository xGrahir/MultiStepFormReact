import styles from './SideBarElement.module.css'

export const SideBarElement = ({element}) => {
    return (
        <div className={`${styles.element} ${styles.active}`}>{element}</div>
    )
}
