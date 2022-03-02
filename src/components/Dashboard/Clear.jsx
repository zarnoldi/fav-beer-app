import { useDispatch } from "react-redux";

const Clear = () => {
  const dispatch = useDispatch();
  dispatch({ type: "CLEAR" });

  const clearStore = () => {
    dispatch({ type: "CLEAR", payload: [] });
  };

  return (
    <div>
      <p onClick={clearStore}>Clear List</p>
    </div>
  );
};

export default Clear;
