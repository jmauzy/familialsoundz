import React, {useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nav from '../components/nav';
import Header from '../components/header';

import {getLatestDate} from '../helpers';

export default function Home() {
	useEffect(redirectToLatest, []);

	function redirectToLatest() {
		Router.push(`/releases/${getLatestDate()}`)
	}

	return null;
}