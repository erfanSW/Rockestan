const { Song } = require('../models');
const config = require('../config/config')
const { Op } = require('sequelize')

module.exports = {
    async index(req, res) {
        try {
            let songs = null
            let search = req.query.search
            if (search) {
                songs = await Song.findAll({
                    where: {
                        [Op.or]: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                songs = await Song.findAll({
                    limit: 10
                })
            }
            res.send(songs)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs!'
            })
        }
    }, async show(req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (error) {
            console.error(error);

            res.status(500).send({
                error: 'An error has occured trying to fetch the song!'
            })
        }
    }, async post(req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song);
        } catch (error) {
            console.error(error);

            res.status(500).send({
                error: 'An error has occured trying to create the song!'
            })
        }
    }, async put(req, res) {
        try {
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body);
        } catch (error) {
            console.error(error);

            res.status(500).send({
                error: 'An error has occured trying to update the song!'
            })
        }
    }
}
