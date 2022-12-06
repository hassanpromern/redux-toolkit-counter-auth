import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", payload: 5 });
    dispatch(counterActions.increase(10)); // redux toolkit behind the scene {type=SOME_UNIQUE_IDENTIFIRE,payload:10}
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.togglecounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>

        <button onClick={decrementHandler}>decrement</button>

        <button onClick={increaseHandler}>increment By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
