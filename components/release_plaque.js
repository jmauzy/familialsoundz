import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {getReleaseByIssue} from '../helpers';
import DiscogsLink from './discogs_link';

export default function ReleasePlaque({issue}) {
	const [cover_url, setCoverUrl] = useState(null);
	let surround_color = '#000000';

	const release = getReleaseByIssue(issue);

	if (release.color) {
		surround_color = release.color;
	}
	const formatted_date = dayjs(release.date).format('M.YY');

	return (
		<PlaqueWrap>
			<PlaqueSurround surround_color={surround_color}>
				<PlaqueCoverArt src={`/static/covers/${issue}.jpg`} />
				<PlaqueDate>{formatted_date}</PlaqueDate>
				<PlaqueTitle>{release.title.toUpperCase()}</PlaqueTitle>
			</PlaqueSurround>
			<LinksWrap>
				<DiscogsLink release={release.discogs_release} />
			</LinksWrap>
		</PlaqueWrap>
	);
}

const PlaqueWrap = styled.div`
	margin: auto;
	margin-bottom: 10px;

	@media only screen and (min-width: 900px) {
		margin: 0;
	}
`;

const PlaqueSurround = styled.div`
	flex: none;
	font-style: italic;
	font-weight: 400;
	position: relative;
	display: flex;
	color: white;

	align-items: center;
	justify-content: center;
	background-color: ${props => props.surround_color};
	color: white;
	height: 300px;
	width: 300px;
`;

const PlaqueCoverArt = styled.img`
	margin: auto;
	height: 210px;
	width: 210px;
`;

const PlaqueDate = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
`;

const LinksWrap = styled.div`
	text-align: center;	
	padding: 3px;
`;

const PlaqueTitle = styled.div`
	position: absolute;
	transform: rotate(90deg) translate(0, -100%);
	transform-origin: 100% 0;
	margin-right: -42px;
	margin-top: 130px;
	width: 230px;
	height: 32px;
`;
