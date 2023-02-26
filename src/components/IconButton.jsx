import { IconMenu } from './icons';

export default function IconButton(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
