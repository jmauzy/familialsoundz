import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {getReleaseByDate} from '../helpers'

export default function ReleasePlaque({date}) {
	const release = getReleaseByDate(date);

	const split_date = date.split('_')
	const formatted_date = dayjs(new Date(split_date[0], split_date[1], 1)).format('MMMM YYYY');

	return (
		<WriteupWrap>
			<WriteupHeader>
				<div>Issue {release.issue} - {formatted_date}</div>
				<div>{release.title} - {release.artist}</div>
			</WriteupHeader>	
			<WriteupContent>
				{release.description}
			</WriteupContent>
		</WriteupWrap>
	);
}

const WriteupWrap = styled.div`
	@media only screen and (min-width: 900px) {
		width: 300px;
	}

	font-size: 14px;
`;

const WriteupHeader = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;

const WriteupContent = styled.div`
	line-height: 20px;
`;
