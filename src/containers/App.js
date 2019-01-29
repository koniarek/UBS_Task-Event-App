import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import DynamicImport from "./utils/DynamicImport";
import Header from "./components/Header";
import Footer from "./components/Foader";
import ScrollToTop from "./components/scroll-to-top";
import { store, history } from "./store";
import { saveState } from "./utils/local-storage";
import FormContainer from "./containers/FormContainer";

const App = props => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<ScrollToTop>
					<div className="app-wrapper">
						<Header />
						<div className="main">
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route exact path="/add-event/" component={AddEvent} />
								<Route
									exact
									path="/events/:id/"
									component={EventDetails}
								/>
								<Route
									exact
									path="/events/:id/edit/"
									component={EditEvent}
								/>
								<Route component={NoMatch} />
							</Switch>
						</div>
						<Footer />
						<ToastContainer position="bottom-center" autoClose={5000} />
					</div>
				</ScrollToTop>
			</ConnectedRouter>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
