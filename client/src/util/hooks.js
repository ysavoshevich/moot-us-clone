import { useEffect } from "react";

export const useOutsideClick = (ref, fn) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      fn();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
