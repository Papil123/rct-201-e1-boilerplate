import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";
type List1Props = {
  // TODO
  initialValues: number[];
  label: string;
};
const List1 = (props: List1Props) => {
  const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
    useNumberList(props.initialValues);
  const [num, setNum] = useState(0);
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">
        {/* Label */}
        {props.label}
      </h3>
      <div>
        {list.map((element) => (
          <div data-testid="list1-element">
            {/* Each element in a list */}
            {element}
          </div>
        ))}
      </div>
      {/* Iterate List and wrap the element div below inside */}

      <input
        data-testid="list1-input"
        onChange={(e) => {
          setNum(+e.target.value);
        }}
      />
      <button onClick={appendStart} data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}Append Start
      </button>
      <button onClick={popEnd} data-testid="list1-btn-pop-end">
        {/* po last element btn */}Pop End
      </button>
      <button onClick={clear} data-testid="list1-btn-clear">
        {/* clear list and set empty button */}Clear
      </button>
      <button onClick={reset} data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}Reset
      </button>
    </div>
  );
};

export default List1;
