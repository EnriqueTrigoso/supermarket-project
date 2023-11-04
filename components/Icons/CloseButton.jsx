import styles from './CloseButton.module.css'

const CloseButton = (props) => (
  <svg
    className={styles.close_button}
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="#fff"
    {...props}>
    <path d="m6.4 19.8-2.2-2.2L9.8 12 4.2 6.4l2.2-2.2L12 9.8l5.6-5.6 2.2 2.2-5.6 5.6 5.6 5.6-2.2 2.2-5.6-5.6Z" />
  </svg>
)

export default CloseButton