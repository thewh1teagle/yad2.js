import axios from 'axios'
import type {
    FeedResponse,
    ContactResponse,
    MapFeedResponse
} from './interfaces'

const api = axios.create()

export async function feedSearch(url: string) {
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.7',
        'Connection': 'keep-alive',
        'Origin': 'https://www.yad2.co.il',
        'Referer': 'https://www.yad2.co.il/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Sec-GPC': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'mobile-app': 'false',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    const response = await api.get(url, { headers })
    const responseData = response.data as FeedResponse
    return { responseData, response }
}

export async function getContact(itemId: string) {
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Referer': `https://www.yad2.co.il/item/${itemId}`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-GPC': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'mobile-app': 'false',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'uzlc': 'true'
    }
    const response = await axios.get(`https://www.yad2.co.il/api/item/${itemId}/contactinfo?id=${itemId}&isPlatinum=false`, { headers });
    const responseData = response.data as ContactResponse
    return { responseData, response }
}



export type Action ='roommates' | 'forsale' | 'rent' | 'commercial'
export async function mapFeedSearch(url: string, action: Action) {
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Referer': `https://www.yad2.co.il/realestate/${action}/map?z=10`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-GPC': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'mobile-app': 'false',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'uzlc': 'true'
    }
    const response = await axios.get(url, { headers });
    const responseData = response.data as MapFeedResponse
    return { responseData, response }
}

