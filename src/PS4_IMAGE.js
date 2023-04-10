export const PS4_IMAGE = ({ imageLink, caption }) => {
  console.log(imageLink, caption);
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={imageLink}
        alt="background"
      />
      <h1
        style={{
          fontSize: " 80px",
          color: " white",
          textAlign: "center",
          position: "absolute",
          top: " 0",
          bottom: "0",
          left: "0",
          right: " 0",
          height: "fit-content",
          margin: "auto"
        }}
      >
        {caption}
      </h1>
    </div>
  );
};
