import type { Song } from '$lib';

// The Life of a Showgirl
import { ActuallyRomantic } from '$lib/releases/The Life of a Showgirl/Actually Romantic';
import { Cancelled } from '$lib/releases/The Life of a Showgirl/CANCELLED';
import { EldestDaughter } from '$lib/releases/The Life of a Showgirl/Eldest Daughter';
import { ElizabethTaylor } from '$lib/releases/The Life of a Showgirl/Elizabeth Taylor';
import { FatherFigure } from '$lib/releases/The Life of a Showgirl/Father Figure';
import { Honey } from '$lib/releases/The Life of a Showgirl/Honey';
import { Opalite } from '$lib/releases/The Life of a Showgirl/Opalite';
import { RuinTheFriendship } from '$lib/releases/The Life of a Showgirl/Ruin The Friendship';
import { TheFateOfOphelia } from '$lib/releases/The Life of a Showgirl/The Fate of Ophelia';
import { TheLifeOfAShowgirl } from '$lib/releases/The Life of a Showgirl/The Life of a Showgirl';
import { WishList } from '$lib/releases/The Life of a Showgirl/Wish List';
import { Wood } from '$lib/releases/The Life of a Showgirl/Wood';

export const tracks: Song[] = [
	// The Life of a Showgirl
	TheFateOfOphelia,
	ElizabethTaylor,
	Opalite,
	FatherFigure,
	EldestDaughter,
	RuinTheFriendship,
	ActuallyRomantic,
	WishList,
	Wood,
	Cancelled,
	Honey,
	TheLifeOfAShowgirl
];

/*
// https://www.musixmatch.com/lyrics/Taylor-Swift/The-Fate-of-Ophelia
function getLyrics() {
  const container = document.querySelector('div > div > div > h2').parentElement;
  const children = Array.from(container.children).slice(1, -3);
  const lyrics = children.map(child => {
    if (child.children[0].children[0]?.tagName === 'H3') child.children[0].children[0].remove();
    return Array.from(child.children).map(line => line.textContent.trim()).filter(line => line.length > 0);
  });
  return JSON.stringify(lyrics.flat());
}
*/
