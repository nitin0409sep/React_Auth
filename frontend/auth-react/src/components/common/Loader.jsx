import { ColorRing } from "react-loader-spinner";

export const Loader = ({ height, width }) => {
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
