import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getReleaseByDate} from '../helpers'
import ReleasePlaque from './release_plaque';
import ReleaseWriteup from './release_writeup';

export default function ReleaseFull({date}) {

	const release = getReleaseByDate(date);

	if (!release) return <div>not found</div>

	return (
		<ReleaseWrap>
			<ReleasePlaque date={date} />
			<ReleaseWriteup date={date} />
		</ReleaseWrap>
	);
}

const ReleaseWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;

	@media only screen and (min-width: 900px) {
		flex-direction: row;
		width: 620px;
		justify-content: space-between;
	}

	@media
`;
