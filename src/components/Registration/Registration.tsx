import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { activationRegistration } from "../redux/action-creators";

const RegistartionActivation= ()=>{
    const {uid = '', token = ''} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(activationRegistration({uid,token}))
    }, [uid, token])
    return(
        <div>
            Loading...
        </div>
    )
}
export {RegistartionActivation }