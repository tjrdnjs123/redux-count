import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import store from "./redux/store";
import reducer from "./redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const name = useSelector((state) => state.name);
  const text = useSelector((state) => state.text);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const plusCount = () => {
    dispatch({ type: "INCREMENT" ,payload:{num:5}});
  };
  const minusCount = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const login = () =>{
    dispatch({type:"LOGIN", payload:{name:"석원",text:"환영합니다"}})
  }
  return (
    <div class="all-div">
      <div>{name} {text}</div>
      <div>{count}</div>
      <div>
        <button onClick={plusCount}>+버튼</button>
      </div>
      <div>
        <button onClick={minusCount}>-버튼</button>
      </div>
      <div>
        <button onClick={reset}>초기화</button>
      </div>
      <div>
      <Box/>
      </div>
      <div>
      <button onClick={login}>로그인</button>
      </div>
    </div>
  );
}

export default App;
