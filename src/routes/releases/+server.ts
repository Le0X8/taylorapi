import type { Release } from '$lib';
import { TheLifeOfAShowgirlAlbum } from '$lib/releases/The Life of a Showgirl';
import { json } from '@sveltejs/kit';

const releases: Release[] = [
	// albums
	{
		title: 'Taylor Swift',
		date: '2006-10-24',
		cover: 'taylorswift',
		tracks: [
			'Tim McGraw',
			'Picture to Burn',
			'Teardrops on My Guitar',
			'A Place in This World',
			'Cold as You',
			'The Outside',
			'Tied Together with a Smile',
			'Stay Beautiful',
			"Should've Said No",
			"Mary's Song (Oh My My My)",
			'Our Song',
			"I'm Only Me When I'm with You",
			'Invisible',
			'A Perfectly Good Heart'
		],
		type: 'album'
	},
	{
		title: 'Fearless',
		date: '2008-11-11',
		cover: 'fearless',
		tracks: [
			'Fearless',
			'Fifteen',
			'Love Story',
			'Hey Stephen',
			'White Horse',
			'You Belong with Me',
			'Breathe',
			'Tell Me Why',
			"You're Not Sorry",
			'The Way I Loved You',
			'Forever & Always',
			'The Best Day',
			'Change'
		],
		type: 'album'
	},
	{
		title: 'Speak Now',
		date: '2010-10-25',
		cover: 'speaknow',
		tracks: [
			'Mine',
			'Sparks Fly',
			'Back to December',
			'Speak Now',
			'Dear John',
			'Mean',
			'The Story of Us',
			'Never Grow Up',
			'Enchanted',
			'Better than Revenge',
			'Innocent',
			'Haunted',
			'Last Kiss',
			'Long Live'
		],
		type: 'album'
	},
	{
		title: 'Red',
		date: '2012-10-22',
		cover: 'red',
		tracks: [
			'State of Grace',
			'Red',
			'Treacherous',
			'I Knew You Were Trouble.',
			'All Too Well',
			'22',
			'I Almost Do',
			'We Are Never Ever Getting Back Together',
			'Stay Stay Stay',
			'The Last Time',
			'Holy Ground',
			'Sad Beautiful Tragic',
			'The Lucky One',
			'Everything Has Changed',
			'Starlight',
			'Begin Again'
		],
		type: 'album'
	},
	{
		title: '1989',
		date: '2014-10-27',
		cover: '1989',
		tracks: [
			'Welcome to New York',
			'Blank Space',
			'Style',
			'Out of the Woods',
			'All You Had to Do Was Stay',
			'Shake It Off',
			'I Wish You Would',
			'Bad Blood',
			'Wildest Dreams',
			'How You Get the Girl',
			'This Love',
			'I Know Places',
			'Clean'
		],
		type: 'album'
	},
	{
		title: 'Reputation',
		date: '2017-11-10',
		cover: 'reputation',
		tracks: [
			'...Ready for It?',
			'End Game',
			'I Did Something Bad',
			"Don't Blame Me",
			'Delicate',
			'Look What You Made Me Do',
			'So It Goes...',
			'Gorgeous',
			'Getaway Car',
			'King of My Heart',
			'Dancing with Our Hands Tied',
			'Dress',
			"This Is Why We Can't Have Nice Things",
			'Call It What You Want',
			"New Year's Day"
		],
		type: 'album'
	},
	{
		title: 'Lover',
		date: '2019-08-23',
		cover: 'lover',
		tracks: [
			'I Forgot That You Existed',
			'Cruel Summer',
			'Lover',
			'The Man',
			'The Archer',
			'I Think He Knows',
			'Miss Americana & The Heartbreak Prince',
			'Paper Rings',
			'Cornelia Street',
			'Death by a Thousand Cuts',
			'London Boy',
			"Soon You'll Get Better",
			'False God',
			'You Need to Calm Down',
			'Afterglow',
			'ME!',
			"It's Nice to Have a Friend",
			'Daylight'
		],
		type: 'album'
	},
	{
		title: 'folklore',
		date: '2020-07-24',
		cover: 'folklore',
		tracks: [
			'the 1',
			'cardigan',
			'the last great american dynasty',
			'exile',
			'my tears ricochet',
			'mirrorball',
			'seven',
			'august',
			'this is me trying',
			'illicit affairs',
			'invisible string',
			'mad woman',
			'epiphany',
			'betty',
			'peace',
			'hoax'
		],
		type: 'album'
	},
	{
		title: 'evermore',
		date: '2020-12-11',
		cover: 'evermore',
		tracks: [
			'willow',
			'champagne problems',
			'gold rush',
			"'tis the damn season",
			'tolerate it',
			'no body, no crime',
			'happiness',
			'dorothea',
			'coney island',
			'ivy',
			'cowboy like me',
			'long story short',
			'marjorie',
			'closure',
			'evermore'
		],
		type: 'album'
	},
	{
		title: 'Midnights',
		date: '2022-10-21',
		cover: 'midnights',
		tracks: [
			'Lavender Haze',
			'Maroon',
			'Anti-Hero',
			'Snow on the Beach',
			"You're on Your Own, Kid",
			'Midnight Rain',
			'Question...?',
			'Vigilante Shit',
			'Bejeweled',
			'Labyrinth',
			'Karma',
			'Sweet Nothing',
			'Mastermind'
		],
		type: 'album'
	},
	{
		title: 'THE TORTURED POETS DEPARTMENT',
		date: '2024-04-19',
		cover: 'ttpd',
		tracks: [
			'Fortnight',
			'The Tortured Poets Department',
			'My Boy Only Breaks His Favorite Toys',
			'Down Bad',
			'So Long, London',
			'But Daddy I Love Him',
			'Fresh Out The Slammer',
			'Florida!!!',
			'Guilty as Sin?',
			"Who's Afraid of Little Old Me?",
			'I Can Fix Him (No Really I Can)',
			'loml',
			'I Can Do It With a Broken Heart',
			'The Smallest Man Who Ever Lived',
			'The Alchemy',
			'Clara Bow'
		],
		type: 'album'
	},
	TheLifeOfAShowgirlAlbum
];

export function GET() {
	return json(releases);
}
