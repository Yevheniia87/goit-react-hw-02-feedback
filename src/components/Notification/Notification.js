import React from "react";
import styles from "../Notification/notification.module.css";
function Notification({ message }) {
  return (
    <>
      <p className={styles.notification}>{message}</p>
    </>
  );
}
export default Notification;
