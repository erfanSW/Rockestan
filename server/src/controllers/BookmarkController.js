const { Bookmark } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const { songId, userId } = req.query;
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            res.send(bookmark)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error: 'An error has occured trying to fetch the Bookmark!'
            })
        }
    }, async post(req, res) {
        try {
            const { songId, userId } = req.body
            const bookmark = await Bookmark.findOne({
                SongId: songId,
                UserId: userId
            })

            if (bookmark) {
                res.status(400).send({
                    error: 'You already have this set as bookmark!'
                });
            }

            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error: 'An error has occured trying to create the Bookmark!'
            })
        }
    }, async delete(req, res) {
        try {
            const { bookmarkId } = req.params
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error: 'An error has occured trying to delete the Bookmark!'
            })
        }
    }
}
