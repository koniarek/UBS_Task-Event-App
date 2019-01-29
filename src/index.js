import React from 'react';
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import DynamicImport from "./utils/DynamicImport";
import Loader from "./components/Loader";
import { store, history } from "./store";
import { saveState } from "./utils/local-storage";
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const PreLoader = () => (
	<div className="page-loading">
		<Loader />
	</div>
);

const Dashboard = props => (
	<DynamicImport load={() => import("./components/Dashboard")}>
		{Component =>
			Component === null ? <PreLoader /> : <Component {...props} />
		}
	</DynamicImport>
);

const AddEvent = props => (
	<DynamicImport load={() => import("./components/add-event")}>
		{Component =>
			Component === null ? <PreLoader /> : <Component {...props} />
		}
	</DynamicImport>
);

const EditEvent = props => (
	<DynamicImport load={() => import("./components/EditEvent")}>
		{Component =>
			Component === null ? <PreLoader /> : <Component {...props} />
		}
	</DynamicImport>
);

const EventDetails = props => (
	<DynamicImport load={() => import("./components/EventDetails")}>
		{Component =>
			Component === null ? <PreLoader /> : <Component {...props} />
		}
	</DynamicImport>
);

const NoMatch = props => (
	<DynamicImport load={() => import("./components/NoMatch")}>
		{Component =>
			Component === null ? <PreLoader /> : <Component {...props} />
		}
	</DynamicImport>
);

store.subscribe(() => {
	saveState(store.getState());
});
