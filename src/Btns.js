import "./css/bootstrap.css";
import "./css/Btns.css";

function BtnCover(props) {
    return(

        <button type="button" class="btn btn-outline-light">{props.name}</button>

    );
}
export default BtnCover;