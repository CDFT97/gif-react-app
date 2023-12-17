import { getGifs } from "../helpers/getGifs.js";
import { useEffect } from "react";
import { useState } from "react";
export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
