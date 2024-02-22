import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slices/score";

const Square = () => {
	const [moleActive, setMoleActive] = useState(false);
	const [isGameOver, SetGameOver] = useState(false);
	const score = useSelector((state) => state?.score?.value);
	let timerId;
	const randomTime = Math.random() * 20000;
	const dispatch = useDispatch();
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

	const addScore = () => {
		dispatch(increment());
	};
	return (
		<TouchableOpacity onPress={moleActive ? addScore : () => {}}>
			<View style={moleActive ? styles.mole : styles.square}>
				{isGameOver && <Text>X</Text>}
			</View>
		</TouchableOpacity>
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

export default Square;

