import { useState } from "react";
import axios from "axios";
function Detail() {
    const [data, setData] = useState([])
    let Api = "https://jsonplaceholder.typicode.com/users"
    let GetapiData = () => {
        axios.get(Api).then((res) => {
            console.log(res)
            setData([...res.data])
        }).catch((err) => {
            console.log(err)
        })
        axios.post(Api, {
            name: "syed usama",
            class: "12",
            id: 12,


        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        axios.put(Api + "/1", {
            body: "Custom Number"
        }).then((res) => {
            console.log("sucessfully Number", res)
        }).catch((err) => {
            console.log(err)
        })
        axios.delete(Api + "/2", { body: "Custom Number" }).then((res) => {
            console.log("Deleted Number", res)

        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
            <button className="btn btn-primary m-5" onClick={GetapiData} variant="contained">
                GET DATA
            </button>
            {
                data.map((e, i) => (
                    <div>
                        <p className="text-dark">
                            {e.body}

                        </p>
                    </div>
                ))
            }
        </>
    )
}
export default Detail;