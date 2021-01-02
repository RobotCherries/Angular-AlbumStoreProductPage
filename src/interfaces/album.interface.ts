import { AlbumTrack } from "./album-track.interface";

export interface Album {
  id: number,
  artist: string,
  album: {
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: AlbumTrack[]
  }
}
