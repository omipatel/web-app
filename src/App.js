import logo from './logo.svg';
import './App.css';
import Header from './componentAll/Header';
import Footer from './componentAll/Footer';
import Layout from './componentAll/Layout';
 
 
 
import { Row , Container, Col } from 'reactstrap'; 
import {Routes,Route, Link, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import AllCourse from './pages/AllCourse';
import AddCourse from './pages/AddCourse';
function App() {
  return ( 
    <div className="App"> 
    <BrowserRouter>
    <Container>
    <Header></Header>      
      <Row>
        <Col md={4}>
        <Layout></Layout>
        </Col>
        <Col md={8}>
          <Routes>
          <Route path="" Component={Home}  exact/>
           <Route path="/all-Courses" Component={AllCourse} exact/>
            <Route path="/addCourse" Component={AddCourse} exact/>
            <Route path="/contact" Component={Contact} exact/> 
            <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
            </Routes>
        </Col>
      </Row>
   
      </Container>
      </BrowserRouter>
      </div>
  );
}

export default App;
