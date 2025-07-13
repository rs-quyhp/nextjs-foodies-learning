"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef(null);

  const pickImageHandler = () => {
    imageInputRef.current.click();
  };

  const onImagePicked = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>Please pick an image.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          className={styles.input}
          ref={imageInputRef}
          onChange={onImagePicked}
          required
        />
        <button
          type="button"
          className={styles.button}
          onClick={pickImageHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
