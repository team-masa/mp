import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
    return (
            <InfinitySpin
                visible={true}
                width="50"
                color="#735F32"
                ariaLabel="infinity-spin-loading"
            />
    )
}

export default Loader