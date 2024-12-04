const createMarket = require('./service')



 async function createMarketController(req, res) {


    const { marketId, url, resolution } = req.body
    
    try {
        const dbStorage = await createMarket({ marketId, url, resolution })
        res.status(201).json(dbStorage)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = createMarketController 

