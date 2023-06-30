import {mapFeedSearch} from 'yad2.js'

async function main() {
    // get URL from https://www.yad2.co.il/realestate/forsale/map?z=10
    const url = 'https://www.yad2.co.il/api/feed/get?cat=2&subcat=1&z=12&center_point[]=32.06178847090507,34.77022940170352&distance[]=262&isMapView=1&page=1'
    const {responseData} = await mapFeedSearch(url, 'forsale')
    console.log(responseData.feed)
}
main()