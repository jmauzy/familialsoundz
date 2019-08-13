import React from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';

export default function MainLayout({children}) {
	return (
		<PageWrap>
			<Header/>
			<ContentWrap>
				{children}

			</ContentWrap>
		</PageWrap>
	);
}

const PageWrap = styled.div`
	font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
`;

const ContentWrap = styled.div`
	padding: 10px;
	margin: auto;
	max-width: 800px;
`;