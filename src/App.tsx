import React from "react";
import styles from  "./App.module.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className={styles.App}>
      {/* Clock */}
       <Clock/>
       <div className={styles.main} >
        {/* List 1  initialValues [1, 2, 3] */}
        <List1 label="List1" initialValues={[1,2,3]}/>
        {/* List 2  initialValues [4, 5] */}
         <List2 label="List2" initialValues={[4,5]} />
       </div>
      
    </div>
  );
}

export default App;
