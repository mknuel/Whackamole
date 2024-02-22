import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import GameBoard from "./components/GameBoard";
import store from "./redux/store";
export default function App() {
	return (
		<Provider store={store}>
			<GameBoard />
		</Provider>
	);
}

const styles = StyleSheet.create({});
