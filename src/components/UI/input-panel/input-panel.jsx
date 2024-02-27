import './input-panel.scss';
import { useState } from 'react';

function InputPanel(props){
    const [value, setValue] = useState(props.value ?? '');

    const Change = (e = props.event) => {
        setValue(e.target.value);
        if(props.onChange){
            props.onChange(e.target.value);
        }
    }
    return(
        <div>
            <label for={props.for} class="form-label">{props.name ?? ''}</label>
            <input
                type={props.type ?? "text"}
                class="form-control"
                id={props.ID}
                value={value}
                onChange={Change}
            />
            <div class="form-text">{props.description ?? ""}</div>
        </div>
    )
}

export default InputPanel;