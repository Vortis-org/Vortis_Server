const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()


async function createMarket( {marketId, url, resolution }) {

  console.log(marketId, url, resolution)

  const dbStorage = await prisma.image.create({
    data: {
      marketId: marketId,
      url: url,
      resolution: resolution,
    },
  })
  return dbStorage
}





module.exports = createMarket