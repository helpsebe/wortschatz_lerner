import { Loader } from "./";

export const FullscreenLoader = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#f8f9fa",
        margin: "auto",
        color: "#fff",
      }}>
      <Loader />
    </div>
  );
};
