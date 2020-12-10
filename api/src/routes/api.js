// const { Router } = require('express');
// const fetch = require('node-fetch')

// const router = Router();

// router.post("/", async function (req, res) {
//     const { query }  = req.body;

//     console.log(req.body)

//     const search = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
//         .then(response => response.json())
//         .then( resObject => resObject['results'] )

//         console.log()

//     res.send(search)
// })


// module.exports = router;
const { Router, response } = require('express');
const fetch = require('node-fetch')
const router = Router();

const cacheObject = {}



router.post("/", async function (req, res) {
    const { string, filter, page } = req.body

    const filterObject = {
        "Mas Relevantes": "relevance",
        "Mayor Precio": "price_desc",
        "Menor Precio": "price_asc"
    }


    const objectKey = `${string}-${filter}`


    console.log(page)

    if (cacheObject[objectKey]) {
        res.send(cacheObject[objectKey])
    } else {
        const search = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${string}&sort=${filterObject[filter]}&limit=30&offset=${30 * page}`)
            .then(response => response.json())
        const arrayResponse = []
        arrayResponse.push(search)
        const filteredResponse = arrayResponse[0].results.map((prod) => {
            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                currency_id: prod.currency_id,
                available_quantity: prod.available_quantity,
                thumbnail: prod.thumbnail,
                condition: prod.condition
            }
        })
        const response = {
            [string]: filteredResponse
        }

        cacheObject[objectKey] = filteredResponse;
        console.log(cacheObject)

        res.send(filteredResponse)
    }


})
module.exports = router;
