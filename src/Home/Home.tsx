import FeatureProducts from '../Components/FeatureProducts/FeatureProducts'
import Hero from '../Components/Hero/Hero'
import LatestProducts from '../Components/LatestProducts/LatestProducts'
const Home = () => {
  return (
<>

  {/* main Home page */}
    <div>
      <Hero/>
    </div>


  {/* Feature Product Section */}
  <div>
    <FeatureProducts/>
  </div>


    {/* Feature Product Section */}
  <div>
    <LatestProducts/>
  </div>

</>
  )
}

export default Home