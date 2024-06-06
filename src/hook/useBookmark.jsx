import { useState } from "react";
import axios from "axios";

const useBookmark = (initialState, userId, postId) => {
  const [heart, setHeart] = useState(initialState);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleBookmark = async () => {
    // setLoading(true);
    // setError(null);
    try {
      if (!heart) {
        await addBookmark();
      } else {
        await deleteBookmark();
      }
      setHeart(!heart);
    } catch (err) {
      setError(err);
    } finally {
      // setLoading(false);
    }
  };

  const addBookmark = async () => {
    const res = await axios.post(`http://localhost:5001/${userId}/addBookmark`, {
      userID: userId,
      postID: postId,
    });
    if (res.status === 201) {
      console.log(res.data.msg);
    }
  };

  const deleteBookmark = async () => {
    const res = await axios.post(`http://localhost:5001/${userId}/deleteBookmark`, {
      userID: userId,
      postID: postId,
    });
    if (res.status === 200) {
      console.log(res.data.msg);
    }
  };

  return { heart, toggleBookmark };
};

export default useBookmark;
