import { writable, derived } from 'svelte/store';
import { PostCard } from "./objects/post_card";

export const apiCards = writable([]);

export const cards = derived(apiCards, ($apiCards) => {
  return $apiCards.map(card => new PostCard(card));
});