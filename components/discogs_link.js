import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DiscogsLink({release}) {

	const discogs_url = `https://discogs.com/release/${release}`;

	return (
		<DiscogsLinkAnchor href={discogs_url}>View Release on Discogs</DiscogsLinkAnchor>
	);
}

const DiscogsLinkAnchor = styled.a`
	cursor: pointer;
	color: black;
`;

