import releases from './data/releases.js';

export function getReleaseByDate(date) {
	return Object.assign({}, releases[date]);
}

export function getLatestIssue() {
	return Object.values(releases).reduce((memo, release) => {
		return release.issue > memo ? release.issue : memo;
	}, 1);
}

export function getDateForIssue(issue) {
	return Object.keys(releases).find(r => releases[r].issue === issue);
}

export function getLatestDate() {
	const issue = getLatestIssue();

	return getDateForIssue(issue);
}
