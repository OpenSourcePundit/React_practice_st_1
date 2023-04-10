export const PS2_START = ({ style_object, buttonname }) => {
  const { backgroundColor, color, borderRadius, padding } = style_object;
  console.log(style_object);
  return (
    <div>
      {/*check on how this works as no styling attributes are given */}
      <button style={{ backgroundColor, color, borderRadius, padding }}>
        {buttonname}
      </button>
    </div>
  );
};
