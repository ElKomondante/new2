import { IInputAdd } from "../../types"

const InputAdd = (props: IInputAdd) => {
    const {type, title, placeholder, onChange} = props;
    return (
        <div className='container-input'>
            <label className='labelInput'>{title}</label>
            <br/>
            <input
                type = {type}
                placeholder = {placeholder}
                style={{padding: '10px 15px'}}
                onChange={onChange}
            />
        </div>
    )
    }

export { InputAdd }