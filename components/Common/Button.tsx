import Loading from "./Loading"

const Button = (props) => {
    console.log(props.isLoading)
    const type = props.type || 'button'
    return (
        <button
            type={type}
            disabled={props.isLoading}
            className={props.className}
            onClick={props.onClick}>
                {props.isLoading? <Loading/>: props.children}
        </button>
    )
}

export default Button