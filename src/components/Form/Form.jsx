import styles from  "../Form/Form.module.css"
const Form = () => {
  return (
    <form>
    <input className={styles.Input_text} type="text" placeholder="Enter your email address"/>
    <button>Let&apos;s Talk</button>
</form>
  )
}

export default Form