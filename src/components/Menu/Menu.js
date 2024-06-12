"use client";
import {
  faEraser,
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Menu/index.module.css";

function Menu() {
  return (
    <div className={styles.toolbox__container}>
      <FontAwesomeIcon className={styles.iconItem} icon={faPencil} />
      <FontAwesomeIcon className={styles.iconItem} icon={faEraser} />
      <FontAwesomeIcon className={styles.iconItem} icon={faRotateLeft} />
      <FontAwesomeIcon className={styles.iconItem} icon={faRotateRight} />
      <FontAwesomeIcon className={styles.iconItem} icon={faFileArrowDown} />
    </div>
  );
}

export default Menu;
