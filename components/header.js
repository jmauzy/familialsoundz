import React from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function MainLayout({children}) {
	return (
		<HeaderWrap>
			Familial Soundz
		</HeaderWrap>
	);
}

const HeaderWrap = styled.div`
	border-bottom: 1px solid #ccc;
	padding-bottom: 5px;
	margin-bottom: 10px;
	font-size: 24px;
	
`;