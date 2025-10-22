export interface Release {
	title: string;
	date: string;
	cover: string;
	tracks: string[];
	type: 'album' | 'single' | 'ep';
}
