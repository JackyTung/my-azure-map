import { searchPOI } from "@/apis/map";
import { useState } from "react";

const useSearchPOI = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSearchPOI = async (params) => {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await searchPOI(params);
      const resp = response.geojson.getFeatures();
      setData(resp);
      setIsSuccess(true);
    } catch (err) {
      setIsLoading(false);

      // TODO: error handling
      console.error("err", err);
    }
  };

  return {
    isLoading,
    isSuccess,
    data,
    handleSearchPOI,
  };
};

export default useSearchPOI;
