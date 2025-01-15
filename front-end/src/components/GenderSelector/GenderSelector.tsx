import React, { CSSProperties } from "react";
import GenderButton from "../GenderButton/GenderButton.tsx";

export default function GenderSelector(props) {
    const masculino = props.genero === 'm'
    const feminino = props.genero === 'f'

    const cor = props.valorInvalido ? '#d50000' : '#ccc'
    const estilo: CSSProperties = {
        boxSizing: 'border-box',
        border: `1px solid ${cor}`,
        borderRadius: '5px',
        padding: '3px',
        paddingBottom: '0'
    }

    return(
        <div style={estilo}>
            <GenderButton
                selecionado={masculino}
                genero={'m'}
                atualizarGenero={props.atualizarGenero}
            />
            <GenderButton
            selecionado={feminino}
            genero={'f'}
            atualizarGenero={props.atualizarGenero}
            />
        </div>    
    )
}