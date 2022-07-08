import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";
import TermsApp from "./legals/TermsApp";
import TermsWeb from "./legals/TermsWeb";
import PrivacyPolicyApp from "./legals/PrivacyPolicyApp";
import PrivacyPolicyWeb from "./legals/PrivacyWeb";
import Slider from "./Slider";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* <Route path="/google/:category" component={Courses} />  */}
          {/* <Route path="/udemy/:category" component={Courses} /> */}
          <Route path="/details/:category/:title" component={CourseDetails} />
          {/* <Route path="/terms-and-condition-app" exact component={TermsApp} /> */}
          {/* <Route
            path="/privacy-policy-app"
            exact
            component={PrivacyPolicyApp}
          /> */}
          {/* <Route path="/terms-and-condition" exact component={TermsWeb} /> */}
          {/* <Route path="/privacy-policy" exact component={PrivacyPolicyWeb} /> */}
          <Route path="/slider" component={Slider} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
