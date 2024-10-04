import Appdownload from '../../components/appdownload/Appdownload'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import Header from '../../components/header/Header'
import './Home.css'

function Home()
{
    return(
        <>
        <Header/>
    {/* <Navbar/> */}
      <Exploremenu/>
       <Appdownload/>
        </>
    )
}
export default Home