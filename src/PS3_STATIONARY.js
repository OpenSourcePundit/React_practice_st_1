export const PS3_STATIONARY = ({ items, header }) => {
  console.log(items, header);
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {items.map((object) => {
          return <li style={{ listStyle: "none" }}>{object}</li>;
        })}
      </ul>
    </div>
  );
};
