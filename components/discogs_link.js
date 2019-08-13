import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {getReleaseByDate} from '../helpers'

export default function DiscogsLink({date}) {

	const release = getReleaseByDate(date);

	const discogs_url = `https://discogs.com/release/${release.discogs_release}`;

	return (
		<a href={discogs_url}>View Release on Discogs</a>
	);
}

