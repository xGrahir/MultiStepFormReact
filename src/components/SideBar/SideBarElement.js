import styles from './SideBarElement.module.css'

export const SideBarElement = ({element, site}) => {
    return (
        <div className={`${styles.element} ${site === element && styles.active}`}>{element}</div>
    )
}
