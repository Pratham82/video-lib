import {
  ADD_TO_LIKED,
  ADD_TO_WATCH_LATER,
  INIT_PLAYLIST,
  REMOVE_LIKED,
  REMOVE_WATCH_LATER,
  ADD_TO_HISTORY,
  REMOVED_FROM_HISTORY,
  CLEAR_HISTORY,
} from "types/playlists";
import { SET_LOADING } from "types/videos";

const playlistReducer = (playlistData: any, { type, payload }: any) => {
  switch (type) {
    case INIT_PLAYLIST:
      return {
        ...playlistData,
        playlists: [...payload],
      };
    case ADD_TO_WATCH_LATER:
      return {
        ...playlistData,
        watchLater: [...payload],
      };
    case REMOVE_WATCH_LATER:
      return {
        ...playlistData,
        watchLater: [...payload],
      };
    case ADD_TO_LIKED:
      return {
        ...playlistData,
        likes: [...payload],
      };
    case REMOVE_LIKED:
      return {
        ...playlistData,
        likes: [...payload],
      };
    case ADD_TO_HISTORY:
      return {
        ...playlistData,
        history: [...payload],
      };
    case REMOVED_FROM_HISTORY:
      return {
        ...playlistData,
        history: [...payload],
      };
    case CLEAR_HISTORY:
      return {
        ...playlistData,
        history: [...payload],
      };
    case SET_LOADING:
      return {
        ...playlistData,
        loading: payload,
      };

    default:
      return {
        ...playlistData,
      };
  }
};

export default playlistReducer;
