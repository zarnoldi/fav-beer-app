import DataDisplay from "../DataDisplay";

const Beer = (props) => {
  console.log(props);

  const row = props;

  return (
    <>
      <DataDisplay row={row} />
    </>
  );
};

export default Beer;
