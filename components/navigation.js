import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {getReleaseByDate, getLatestIssue, getDateForIssue} from '../helpers'

export default function ReleasesNavigation({date}) {

	const release = getReleaseByDate(date);
	if (!release) return null;

	const current_issue = release.issue;
	
	const latest_issue = getLatestIssue();


	function getIssueLink(issue, anchor_text) {
		return <Link href={`/releases/${getDateForIssue(issue)}`}>{anchor_text}</Link>
	}

	return (
		<NavigationWrap>
			{current_issue === 1 ? <div/> : getIssueLink(current_issue - 1, `<< Issue ${current_issue - 1}`)}			
			{current_issue === latest_issue ? <div /> : getIssueLink(current_issue + 1, ` Issue ${current_issue + 1} >>`)}			
		</NavigationWrap>
	);
}

const NavigationWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	& a {
		text-decoration: none;
	}

	& a:visited {
		color: black;
	}
`;
