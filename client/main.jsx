'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';

import Multicheckbox from 'components/Multicheckbox/Multicheckbox';

const inputTable = [
	{label: "Cat", value: 1},
	{label: "Dog", value: 2},
	{label: "Mouse", value: 3},
	{label: "Rat", value: 4},
	{label: "Horse", value: 5},
	{label: "Fish", value: 6},
	{label: "Koala", value: 7},
	{label: "Orca", value: 8}
]
const blockingPairs = [[1, 2], [3, 4]]

render(<Multicheckbox items={inputTable} blockingPairs={blockingPairs} />, document.getElementById('js-main'));
