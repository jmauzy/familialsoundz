import React from 'react';
import MainLayout from '../layouts/main';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import ReleaseFull from '../components/release_full';
import ReleasesNavigation from '../components/navigation';
import { getLatestIssue } from '../helpers';

export default function Release() {
	const router = useRouter();
	
	const issue = router.query.issue ? Number(router.query.issue) : getLatestIssue();
	if (!issue) return null;

	return (
		<MainLayout>
			<ReleasesNavigation issue={issue} />
			<ReleaseFull issue={issue} />
		</MainLayout>
	);
}
