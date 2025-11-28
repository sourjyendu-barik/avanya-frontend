import { useState } from "react";
import axios from "axios";

const useAxiosDelete = () => {
  const [delete_data, setDeleteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRequest = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.delete(url);
      setDeleteData(res.data);
      return res.data; // allow caller to await response
    } catch (err) {
      setError(err);
      console.error(err);
      throw err; // optional: rethrow so caller can handle
    } finally {
      setLoading(false);
    }
  };

  return { deleteRequest, delete_data, loading, error };
};

export default useAxiosDelete;
