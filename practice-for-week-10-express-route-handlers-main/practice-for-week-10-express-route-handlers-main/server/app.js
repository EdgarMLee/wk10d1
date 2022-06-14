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

app.patch('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
});
// deleteArtistByArtistId,
app.delete('/artists/:artistId', (req, res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.json({ message: 'Successfully deleted'});
})

// getAlbumsForLatestArtist,
app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist());
})
// getAlbumsByArtistId,
app.get('/artists/:artistId/albums', (req, res) => {
  res.json(getAlbumByAlbumId(res.params.artistId));
});
// getAlbumByAlbumId,
app.get('/albums/:albumId', (req, res) => {
  res.json(getAlbumByAlbumId(req.params.albumId));
})
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
