import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Button.module.css";

library.add(fas);
const allIcons = Object.keys(fas);

export const Button = () => {
  const [randomIcon, setRandomIcon] = useState<IconDefinition>(faStar);

  const handleClick = () => {
    const iconIndex = Math.floor(Math.random() * allIcons.length);
    const iconName = allIcons[iconIndex];
    const icon = fas[iconName];

    setTimeout(() => {
      setRandomIcon(icon || faStar);
    }, 3000);
  };

  return (
    <>
      <button type='button' className={styles.button} onClick={handleClick}>
        <FontAwesomeIcon className={styles.icon} icon={randomIcon} />
      </button>
    </>
  );
};
