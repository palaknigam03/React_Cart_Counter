import Home from "../components/Home";
import {connect} from 'react-redux';
import { addToCart , removeToCart } from "../service/Actions/actions";

const mapStateToProps = state =>({
    data : state.cardItems
})

const mapDispatchToProps = dispatch=>({
    addTOCartHandler:data=>dispatch(addToCart(data)),
    removeTOCartHandler:data=>dispatch(removeToCart(data))
})





export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home;