import {getItems} from 'yad2.js'

async function main() {
    const url = 'https://gw.yad2.co.il/feed-search-legacy/products/cellular?category=5&area=7&price=-1-2000&forceLdLoad=true'
    const res = await getItems(url)
    const items = res.responseData.data.feed.feed_items
    const pagination = res.responseData.data.pagination
    console.log('Status => ', res.responseData.message)
    console.log('Page Items => ', items.length)
    console.log('Total => ', res.responseData.data.pagination.total_items)
    console.log(`Next page URL: ${url}&page=${2}`)
    console.log(`Last page URL: ${url}&page=${pagination.last_page}`)
}
main()