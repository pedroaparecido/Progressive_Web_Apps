import React from "react";
import Image from "../Image/Image.tsx";
import img from '../Image/img/avatars.png'

export default function GenderImage(props) {
    return(
        <Image
            eixoX={0}
            eixoY={(props.genero === 'm') ? 0 : 1}
            width={170}
            height={170}
            baackgroundHeight={340}
            arquivo={img}
        />
    )
}