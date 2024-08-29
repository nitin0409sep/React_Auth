import { ColorRing } from "react-loader-spinner";

export const useLoader = ({ height = 40, width = 40 }) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      colors={["#4FFFB0", "#4FFFB0", "#4FFFB0", "#4FFFB0", "#4FFFB0"]}
    />
  );
};
