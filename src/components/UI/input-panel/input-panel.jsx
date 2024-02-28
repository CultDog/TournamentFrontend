import './input-panel.scss';

function InputPanel(props){

    return(
        <div>
            <label for={props.for} class="form-label">{props.name ?? ''}</label>
            <input
                type={props.type ?? "text"}
                class="form-control"
                id={props.ID}
                // value= {props.value}
                placeholder={props.placeholder ?? ''}
                onFocus={props.Focus}
                onBlur={props.Blur}
            />
            <div class="form-text">{props.description ?? ''}</div>

            
        </div>
    )
}

export default InputPanel;