import {feedSearch} from 'yad2.js'

async function main() {
    let page = 1
    const url = `https://gw.yad2.co.il/feed-search-legacy/products/cellular?category=5&area=7&price=-1-2000&forceLdLoad=true`
    let {responseData, response} = await feedSearch(url)
    const pagination = responseData.data.pagination

    while (page < pagination.last_page) {
        const {responseData, response} = await feedSearch(`${url}&page=${page}`)
        if (response.status !== 200) {
            console.error(`Oh no!`, response.data, response.status)
            break
        }
        console.log(`Page ${page} Items => `, responseData.data.feed.feed_items.length)
        page++
    }
}
main()