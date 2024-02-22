import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Square from "./Square";
import { useSelector } from "react-redux";
const GameBoard = () => {
	const [timeLeft, setTimeLeft] = useState(11);
	const score = useSelector((state) => state.score.value);
	useEffect(() => {
		if (!timeLeft) {
			return;
		}

		const timerId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearInterval(timerId);
	}, [timeLeft]);

	return (
		<View style={styles.container}>
			<Text>Mk whackamole app!</Text>
			<Text>{timeLeft}</Text>
			<Text>{score}</Text>
			<View style={styles.game}>
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: "100px",
	},

	game: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: 300,
	},
});

export default GameBoard;
