import { useEffect } from "react";
import axios from "axios";

function GetAxios() {
    useEffect(() => {
        axios.get('https://localhost:7242/api/Students')
            .then(res => console.log(res.data))
    }, [])

    return (
        <div>
            dfgdfg
        </div>
    )
}

export default GetAxios;