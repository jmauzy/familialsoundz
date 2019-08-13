import releases from './data/releases.js';

export function getReleaseByIssue(date) {
	return Object.assign({}, releases[date]);
}

export function getLatestIssue() {
	return Object.keys(releases).reduce((memo, release) => (
		release > memo ? release : memo
	), 1);
}

export function getDateForIssue(issue) {
	return (getReleaseByIssue(issue)).date;
}
