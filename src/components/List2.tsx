import React from "react";
import useNumberList from "../hooks/useNumberList";
type List2Props = {
  // TODO
  initialValues: number[];
  label: string;
};
const List2 = (props: List2Props) => {
  const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
    useNumberList(props.initialValues);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">
        {/* Label */}
        {props.label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      <div>
        {list.map((element) => (
          <div data-testid="list2-element">
            {/* Each element in a list */}
            {element}
          </div>
        ))}
      </div>

      <input data-testid="list2-input" />
      <button onClick={appendEnd} data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}Append End
      </button>
      <button onClick={popStart} data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}Pop Start
      </button>
      <button onClick={clear} data-testid="list2-btn-clear">
        Clear
        {/* Button to  clear the list */}
      </button>
      <button onClick={reset} data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}Reset
      </button>
    </div>
  );
};

export default List2;
