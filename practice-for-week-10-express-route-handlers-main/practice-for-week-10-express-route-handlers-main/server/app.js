// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  res.json(getAllArtists());
});

// getLatestArtist,
app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist());
})
// getArtistByArtistId,
app.get('/artists/:artistId', (req, res) => {
  res.json(getArtistByArtistId(req.params.artistId));
})
// addArtist,
app.post('/artists', (req, res) => {
  res.status(201);
  res.json(addArtist(req.body));
})

// editArtistByArtistId,
app.put('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

// deleteArtistByArtistId,


// getAlbumsForLatestArtist,

// getAlbumsByArtistId,

// getAlbumByAlbumId,

// addAlbumByArtistId,

// editAlbumByAlbumId,

// deleteAlbumByAlbumId,

// getFilteredAlbums,

// getSongsByArtistId,

// getSongsByAlbumId,

// getSongBySongId,

// addSongByAlbumId,

// editSongBySongId,

// deleteSongBySongId

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
