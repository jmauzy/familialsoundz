import React from 'react';
import MainLayout from '../../layouts/main';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import ReleaseFull from '../../components/release_full';
import ReleasesNavigation from '../../components/navigation';

export default function Release() {
	const router = useRouter();
	console.log('QUERY', router.query);
	
	const {date} = router.query;
	if (!date) return null;

	return (
		<MainLayout>
			<ReleasesNavigation date={date} />
			<ReleaseFull date={date} />
		</MainLayout>
	);
}
