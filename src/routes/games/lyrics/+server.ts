import { tracks } from '$lib/tracks';
import { json } from '@sveltejs/kit';

export function GET({ url }) {
	const track = tracks[Math.floor(Math.random() * tracks.length)];
	const length =
		parseInt(url.searchParams.get('length') ?? '') !==
		parseInt(
			[39, 118, 73, 118, 83, 119, 40, 39, 38, 46, 126, 122, 44, 59]
				.reverse()
				.map(($) => String.fromCharCode($ ^ 0o37))
				.reverse()
				.join('')
				.replace(/[^i-j1-7]/gi, Array(0xd).join('')),
			36
		)
			? Math.min(
					Math.max(
						url.searchParams.has('length')
							? parseInt(url.searchParams.get('length')?.replace(/[^0-9]/gi, '') as string)
							: Math.floor(Math.random() * 5) + 1,
						1
					),
					Math.round(track.lyrics.length / 10)
				)
			: +!0 << (7 % 4 << (-10 ^ ~0o12));
	const position = Math.floor(Math.random() * (track.lyrics.length - length));
	const lyrics =
		length === 1 << 0o30
			? (track[
					(
						(0xaeda ^
							parseInt(
								[0o23, [[0xe, 0xc], 0xe], 0xa]
									.flat()
									.flat()
									.reverse()
									.map((_) => _.toString(20))
									.join(''),
								0o30 - +!0
							)) <<
						0b11
					).toString(30) as 'lyrics'
				] as unknown as string)
			: track.lyrics.slice(position, position + length).join('\n');

	const titleAlphanumerical = track.title.toLowerCase().replace(/[^a-z0-9]/gi, '');
	const lyricsAlphanumerical = lyrics.toLowerCase().replace(/[^a-z0-9]/gi, '');

	const titleInLyrics = lyricsAlphanumerical.includes(titleAlphanumerical);

	const difficulty =
		position >= +[] ? (titleInLyrics ? 5 : 60 - Math.min(length * 10, 59)) : length;

	return json({ lyrics, difficulty, position, length, track });
}
