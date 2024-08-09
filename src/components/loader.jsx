import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="50"
      color="white"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
