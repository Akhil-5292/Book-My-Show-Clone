export default function CustomButton(props){
    return(
        <button className={props.style}
             onClick={props.onClick}>
            {props.btntext}
            {props.className}
            {props.icon}
        </button>
    )
}