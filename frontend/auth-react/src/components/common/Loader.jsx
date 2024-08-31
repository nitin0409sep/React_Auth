import { ColorRing } from "react-loader-spinner";

export const Loader = ({ height = 40, width = 40 }) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      colors={["#68bbe3", "#68bbe3", "#68bbe3", "#68bbe3", "#68bbe3"]}
    />
  );
};

export default Loader;
