import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<div className="app__sidebar">
					<Sidebar />
				</div>
				<div className={`app__notes`}>
					<Notes />
				</div>
			</div>
		</Provider>
	);
}

export default App;
