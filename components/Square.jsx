import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { addStore } from "../redux/action";
import { connect } from "react-redux";
const Square = () => {
	const [moleActive, setMoleActive] = useState(false);
	const [isGameOver, SetGameOver] = useState(false);
	let timerId;
	const randomTime = Math.random() * 20000;
	useEffect(() => {
		timerId = setInterval(() => {
			setMoleActive(true);

			setTimeout(() => {
				setMoleActive(false);
			}, 800);
		}, randomTime);

		setTimeout(endGame, 60 * 1000);
	}, []);

	const endGame = () => {
		SetGameOver(true);
	};

	return (
		<View style={moleActive ? styles.mole : styles.square}>
			{isGameOver && <Text>X</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	square: {
		flex: 1,
		minWidth: 80,
		minHeight: 80,
		margin: 10,
		backgroundColor: "red",
	},

	mole: {
		flex: 1,
		minWidth: 80,
		minHeight: 80,
		margin: 10,
		backgroundColor: "blue",
	},
});

const mapStateToProps = (state) => {
	return {
		score: state.score,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addScore: () => dispatch(addStore()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
