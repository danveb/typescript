import { useSelector, useDispatch } from "react-redux"; 
import { RootState, decrement, increment } from "./store";

export function ReduxCounter() {
  // grab current count from redux state
  const count = useSelector((state: RootState) => state.counter.value); 
  // dpsatch increment/decrement actions
  const dispatch = useDispatch(); 

  return (
    <div>
      <div>
        <button
          aria-label="Increment value" 
          onClick={() => dispatch(increment())}
        >Increment</button>
        <span role="contentinfo">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>
    </div>
  )
}