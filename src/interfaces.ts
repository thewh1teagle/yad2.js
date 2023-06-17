export interface ContactResponse {
  api_version: number
  data: Data
  status_code: number
  error_message: any
  server_number: number
}

interface Data {
  contact_name: string
  phone_numbers: PhoneNumber[]
  favorites_userid: string
  is_virtual_phone: IsVirtualPhone
  email: boolean
}

interface PhoneNumber {
  title: string
  link: string
}

interface IsVirtualPhone {
  support_sms: boolean
}







export interface SearchResponse {
  data: Data
  message: string
}

enum orderType {
  dateFifo=1,
  cheapToExpensive=3,
  expensiveToCheap=4
}

interface Data {
  feed: Feed
  title: string
  filters: Filter[]
  pagination: Pagination
  catTitle: string
  left_column: boolean
}

interface Feed {
  cat_id: number
  subcat_id: number
  title_text: string
  sort_values: SortValue[]
  feed_items: FeedItem[]
  current_page: number
  page_size: number
  total_items: number
  total_pages: number
  breadCrumbs: BreadCrumb[]
  canonical: string
  left_column: any[]
  search_params: SearchParams
  seo_params: SeoParams
  associated_links: AssociatedLink[]
  header_text: string
  feedLiteral: FeedLiteral
  sales_cat_id: string
}

interface SortValue {
  title: string
  value: number
  selected: number
}

interface FeedItem {
  line_1?: string
  line_2?: string
  line_3: any
  row_1?: string
  row_2?: string
  row_3?: string[]
  row_4?: any[]
  row_5?: string
  search_text?: string
  title_1?: string
  title_2?: string
  images?: Images
  images_count?: number
  img_url?: string
  images_urls?: string[]
  mp4_video_url: any
  video_url: any
  PrimaryArea?: string
  PrimaryAreaID?: number
  AreaID_text?: string
  SecondaryArea?: string
  area_id?: number
  city?: string
  city_code?: number
  coordinates?: Coordinates
  ad_highlight_type?: string
  background_color?: string
  highlight_text?: string
  order_type_id?: orderType
  ad_number?: number
  cat_id?: number
  customer_id?: number
  feed_source?: string
  id?: string
  link_token?: string
  merchant?: boolean
  contact_name?: string
  merchant_name: any
  record_id?: number
  subcat_id?: string
  currency?: string
  currency_text?: string
  price?: string
  deal_info: any
  date?: string
  date_added?: string
  updated_at?: string
  IsVisibleForReco?: boolean
  ad_type?: string
  can_change_layout?: number
  can_hide?: number
  default_layout?: string
  external?: any[]
  is_hidden?: number
  is_liked?: number
  is_trade_in_button?: boolean
  like_count?: number
  line_1_text_color?: string
  line_2_text_color?: string
  promotional_ad?: number
  remove_on_unlike?: boolean
  type: string
  uid: any
  SalesCatID_text?: string
  SalesSubCatID_text?: string
  SaleCondition_text?: string
  SalesSubCat3ID_text?: string
  ManufacturID_text?: string
  SalesCatID?: number
  SalesSubCatID?: number
  SaleCondition?: number
  SalesSubCat3ID?: number
  ManufacturID?: number
  sales_cat_id?: number
  abovePrice?: string
  title?: string
}

interface Images {
  Image1: Image1
  Image2?: Image2
  Image3?: Image3
  Image4?: Image4
  Image5?: Image5
  Image6?: Image6
}

interface Image1 {
  src: string
}

interface Image2 {
  src: string
}

interface Image3 {
  src: string
}

interface Image4 {
  src: string
}

interface Image5 {
  src: string
}

interface Image6 {
  src: string
}

interface Coordinates {
  latitude: number
  longitude: number
}

interface BreadCrumb {
  title: string
  link?: string
}

interface SearchParams {
  salesCatID: number
  salesSubCatID: number
  salesSubCat3ID: number
  area: number
}

interface SeoParams {
  totalAdCount: number
}

interface AssociatedLink {
  title_text: string
  url: string
}

interface FeedLiteral {
  category: Category[]
  item: Item[]
  type: Type[]
  topArea: TopArea[]
}

interface Category {
  title: string
  engTitle: string
  id: number
}

interface Item {
  title: string
  engTitle: string
  id: number
}

interface Type {
  title: string
  engTitle: string
  id: number
}

interface TopArea {
  title: string
  id: number
}

interface Filter {
  title: string
  value: number
  selected: number
}

interface Pagination {
  current_page: number
  items_in_current_page: number
  last_page: number
  max_items_per_page: number
  total_items: number
}
