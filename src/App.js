import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/homeScreen"
import { Container } from "react-bootstrap";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>           

            <Route path='/login' exact element={<LoginScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeOrder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' exact element ={<CartScreen/>} />
            <Route path='/cart' exact element ={<CartScreen/>} />
            <Route path='/' exact element={<HomeScreen/>} />
            <Route path='/search/:keyword' exact element={<HomeScreen/>} />
            <Route path='/admin/userList' exact element={<UserListScreen />} />
            <Route path='/admin/productList' exact element={<ProductListScreen />} />
            <Route path='/admin/orderList' exact element={<OrderListScreen />} />
            <Route path='/admin/user/:id/edit' exact element={<UserEditScreen />} /> 
            <Route path='/admin/product/:id/edit' exact element={<ProductEditScreen />} /> 

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;