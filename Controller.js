import Podcast from '../devise'

export default {
    get_all: (req, res) => {
        res.status(200).json(devises.get_all())
    },

    get: (req, res) => {
        const podcast = devise.get(req.params.id)
        if (podcast)
            res.status(200).json(devise)
        else res.status(404).json({
            error: 'devise Not Found'
        })
    },

    create: (req, res) => {

        const new_devises = devises.add(req.body)

        res.status(201).json(new_devises)
    },

    update: (req, res) => {

        const id = req.params.id

        const new_devises = devise.update(id, req.body)

        res.status(200).json(new_devises)
    },

    delete: (req, res) => {

        const id = req.params.id

        const new_podcasts = devise.delete(id)

        res.status(200).json(new_devises)
    },

    get_reviews: (req, res) => {
        const reviews = devise.get_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'devise Reviews Not Found'
        })
    }
}