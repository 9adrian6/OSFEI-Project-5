export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description: string;

    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
