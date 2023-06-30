import {getContact, feedSearch} from 'yad2.js'


async function main() {
    const url = 'https://gw.yad2.co.il/feed-search-legacy/products/cellular?category=5&area=7&price=-1-2000&forceLdLoad=true'
    const res = await feedSearch(url)
    const itemId = res.responseData.data.feed.feed_items?.[0]?.id
    console.log('itemId => ', itemId)
    if (itemId) {
        const {responseData} = await getContact(itemId)
        console.log('contact => ', responseData)
    } else {
        console.log('No items found')
    }
}
main()