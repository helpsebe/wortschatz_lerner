import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <span
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px 30px",
        // background: "#283149",
        borderRadius: "10px",
        color: "#283149",
      }}>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />{" "}
      Loading...
    </span>
  );
};
