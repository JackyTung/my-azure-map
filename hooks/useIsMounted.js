// FYI: https://stackoverflow.com/questions/58979309/checking-if-a-component-is-unmounted-using-react-hooks
import { useEffect, useState } from "react";

export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}
