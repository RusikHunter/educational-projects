import classes from './Button.module.css'

export default function Button() {
    return (
        <button className={`${classes.button} ${classes.active}`}>Click</button>
    )
}