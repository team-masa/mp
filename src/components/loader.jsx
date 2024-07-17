import { Triangle } from "react-loader-spinner"
import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
    return (
        <div>
 <Triangle
            visible={true}
            height="10"
            width="10"
            color="#4fa94d"
            ariaLabel="triangle-loading"
        />

        <InfinitySpin
                visible={true}
                width="100"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
              /> 
        </div>
       
    )
}

export default Loader