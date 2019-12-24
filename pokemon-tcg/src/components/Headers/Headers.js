import React from "react";
import Header from "./Header/Header";
import styles from "./Headers.module.css";

const headers = props => {
  return (
    <div className={styles.Headers}>
      {Object.keys(props.sets).map(set => {
        return (
          <Header
            key={set}
            name={set}
            logo={props.sets[set].logo}
            banner={props.sets[set].banner}
          />
        );
      })}
    </div>
  );
};

export default headers;
