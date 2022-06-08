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