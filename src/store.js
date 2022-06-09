import { writable, derived } from 'svelte/store';
import { PostCard } from "./interfaces";
import { Post } from "./interfaces";

export const apiCards = writable([]);
export const apiPost = writable([]);

export const cards = derived(apiCards, ($apiCards) => {
  return $apiCards.map(card => new PostCard(card));
});

export const post = derived(apiCards, ($apiPost) => {
  return $apiPost.map(post => new Post(post));
});