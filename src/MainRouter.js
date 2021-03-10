import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import IndexNavBar from "./components/navbar/IndexNavbar";
import Sidebar from "./components/sidebar/SideBar";
import index from "./views";
import Department from "./views/Department";
import Employee from "./views/Employee";
import Contact from "./pages/contact/Contact";
import AddContact from "./pages/contact/AddContact";
import EditContact from "./pages/contact/EditContact";

const MainRouter = () => {
  return (
    <>
      <IndexNavBar /> 
      <div className="grid grid-cols-6 gap-1 ">
        <div className="col-start-1 col-end-2">
          <Sidebar />
        </div>
        <div className="w-fixed col-start-2 col-end-7 mt-10 sm:px-8 sm:py-10 ml-5">
          <Switch>
            <Route exact path="/" component={index} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/dept/" component={Department} />
            <Route exact path="/emp/" component={Employee} />
            <Route path="/contact" component={Contact} />
            <Route path="/add-contact" component={AddContact} />
            <Route path="/edit-contact" component={EditContact} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default MainRouter;
