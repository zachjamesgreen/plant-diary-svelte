import { DateTime } from "luxon";

export interface IImageCard {
  cover_image: string;
  id: number;
  slug: string;
  title: string;
  url: string;
}


export class PostCard {
  cover_image: string;
  id: number;
  slug: string;
  title: string;
  url: string;

  constructor(image: IImageCard) {
    this.cover_image = image.cover_image;
    this.id = image.id;
    this.slug = image.slug;
    this.title = image.title;
    this.url = image.url;
  }
}

// post interface
export interface IPost {
  id: number;
  title: string;
  slug: string;
  body: string;
  cover_image: string;
  url: string;
  published: any;
  updated_at: any;
}
export class Post {
  cover_image: string;
  id: number;
  slug: string;
  title: string;
  url: string;
  _published: any;
  _update_at: any

  constructor(post: IPost) {
    this.cover_image = post.cover_image;
    this.id = post.id;
    this.slug = post.slug;
    this.title = post.title;
    this.url = post.url;
    this.published = post.published;
    this.updated_at = post.updated_at;
  }

  get published() {
    return this._published;
  }

  set published(value: string) {
    this._published = DateTime.fromISO(value);
  }

  get updated_at() {
    return this._update_at;
  }

  set updated_at(value: string) {
    this._update_at = DateTime.fromISO(value);
  }

  async getPostBody() {
    return await fetch(this.url).then((res: Response) => res.text())
  }
}