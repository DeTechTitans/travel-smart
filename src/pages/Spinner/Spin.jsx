import { Oval } from "react-loader-spinner";

import React from 'react'

const Spin = () => {
    return (
    <Oval
            visible={true}
            height="80"
            width="80"
            color="#d5865a"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}
export default Spin;