function mission1_1() {
	const [입력1] = arguments;
	//1-1 미션을 여기에 구현합니다
	//출력을 위해서는 아래처럼 원하는 값을 출력 사이에 입력하면 됩니다.
	출력(입력1);
}

function mission1_2() {
	const [입력1, 입력2] = arguments;
	const 더하기 = 입력1 + ' ' + 입력2;
	출력(더하기);
}

function mission1_3() {
	const [입력1, 입력2] = arguments;
	const 곱하기 = '곱하기 결과 입니다 -> ' + (입력1 * 입력2).toFixed();
	const 나누기 = '나누기 결과 입니다 -> ' + (입력1 / 입력2).toFixed();
	출력(곱하기 + 나누기);
}

function mission2_1() {
	const [입력1, 입력2] = arguments;

	const plus = "더하기 결과 입니다 -> " + (parseInt(입력1) + parseInt(입력2));
	const div = "나누기 결과 입니다 -> " + (입력1 / 입력2).toFixed();
	출력(plus + "<br>" + div);
}

function mission2_2() {
	const [입력1, 입력2] = arguments;
	const keepDistance = Math.abs(입력1 - 입력2);
	출력(keepDistance);
}

function mission2_3(radius) {
	const [입력1, 입력2] = arguments;

	if (isNaN(입력2)) {
		출력('숫자를 입력하세요.');
	} else if (입력2 > 100) {
		출력('너무 큰 숫자입니다!')
	} else {
		const volume = (( Math.PI * 입력1 ** 2 * 입력2 ) / 3).toFixed(1)
		result = `반지름이 ${입력1} 이고 높이기 ${입력2}인 원뿔의 부피는 ${volume} 입니다.`;
		출력(result);
	}
}

function mission2_4() {
	let [count] = arguments;
	count = parseInt(count).toFixed();

	if (isNaN(count)) {
		출력('숫자를 입력하세요.');
	} else {
		count = Math.round(count);
		const price = 25000;

		const firstDeliveryFee = 2500;
		const normalDeliveryFee = 1500;

		const totalHBPrice = price * count * 0.8;
		const totalDeliveryFee = firstDeliveryFee + (normalDeliveryFee * (count - 1));

		const totalPrice = totalHBPrice + totalDeliveryFee;
		출력(totalPrice);
	}
}