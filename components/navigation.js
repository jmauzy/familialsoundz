import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {getReleaseByIssue, getLatestIssue, getDateForIssue} from '../helpers'

export default function ReleasesNavigation({issue}) {

	const release = getReleaseByIssue(issue);
	if (!release) return null;

	const latest_issue = getLatestIssue();

	function getIssueLink(issue, anchor_text) {
		return <Link href={`/releases?issue=${issue}`}>{anchor_text}</Link>
	}

	return (
		<NavigationWrap>
			{issue === 1 ? <div/> : getIssueLink(issue - 1, `<< Issue ${issue - 1}`)}			
			{issue === latest_issue ? <div /> : getIssueLink(issue + 1, ` Issue ${issue + 1} >>`)}			
		</NavigationWrap>
	);
}

const NavigationWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	& a {
		text-decoration: none;
		cursor: pointer;
	}

	& a:visited {
		color: black;
	}
`;
