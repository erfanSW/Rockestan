const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationConotrollerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongController')
const BookmarkController = require('./controllers/BookmarkController')

module.exports = (app) => {
    app.post('/register', AuthenticationConotrollerPolicy.register, AuthenticationController.register),
    app.post('/login', AuthenticationController.login);
    app.get('/songs', SongController.index);
    app.post('/songs', SongController.post);
    app.get('/songs/:songId', SongController.show);
    app.put('/songs/:songId',SongController.put);
    app.get('/bookmarks',BookmarkController.index);
    app.post('/bookmarks',BookmarkController.post);
    app.delete('/bookmarks/:bookmarkId', BookmarkController.delete);
}