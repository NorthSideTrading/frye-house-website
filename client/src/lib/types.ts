export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  date: string;
  text: string;
  photoUrl?: string;
}