import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import YouTube from "react-youtube";
import axios from "axios";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const [urlId, setUrlId] = useState("");

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  const opts = {
    height: "300",
    width: "50%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dbd9f5d38446a0f9c0f746f68a0ff434&language=en-US&page=1`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div
          onClick={() => handleMovie(item.id)}
          className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
        >
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-4" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-4" />
            )}
          </p>
        </div>
      </div>

      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </>
  );
};

export default Movie;
