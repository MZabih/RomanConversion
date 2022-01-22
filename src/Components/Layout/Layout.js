import Aux from "../../hoc/AuxHoc";
import RomanConversion from "../../Containers/RomanConversions/RomanConversion";
import './Layout.css'

const Layout = () => (
    <Aux>
        <main className='app-parent'>
            <RomanConversion/>
        </main>
    </Aux>
)

export default Layout;