import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const useAnimations = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
};

export default useAnimations;
