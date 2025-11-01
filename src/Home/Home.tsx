import { SanityClient } from '../../react-sanity/Client/Client'
import FeatureProducts from '../Components/FeatureProducts/FeatureProducts'
import Hero from '../Components/Hero/Hero'
import LatestProducts from '../Components/LatestProducts/LatestProducts'
import { useLoaderData } from 'react-router-dom'


interface ProductData {
  product_id: number;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  discount_price?: number; 
}

const Home = () => {

  const { featuredProducts , latestProducts} = useLoaderData() as {featuredProducts : ProductData[],latestProducts : ProductData[]}

  
  return (
<>

  {/* main Home page */}
    <div>
      <Hero/>
    </div>


  {/* Feature Product Section */}
  <div>
    <FeatureProducts data={featuredProducts}/>
  </div>


    {/* Feature Product Section */}
  <div>
    <LatestProducts data={latestProducts}/>
  </div>

</>
  )
}

export default Home



// this is a trick used to fetch data before the component in render go and see the main.jsx we call this function there inside
// loader property


export async function FetchProductData() : Promise<{featuredProducts : ProductData[] , latestProducts : ProductData[] }>  {

  const query1 = `
  *[_type == "product" && 'featured_product' in category ]
  | order(_createdAt asc) {
    product_id,
    name,
    price,
    image,
     discount_price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
  `


  const query2 = `
   *[_type == "product" && 'latest_product' in category ] 
   | order(_createdAt asc)  {
    product_id,
    name,
    price,
    image,                     
    "imageUrl": image.asset->url,
    "slug": slug.current,
        discount_price
}`


const featuredProducts = await SanityClient.fetch(query1)
const latestProducts = await SanityClient.fetch(query2)

return{
  featuredProducts , latestProducts
}


}