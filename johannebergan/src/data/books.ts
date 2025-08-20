export type Book = {
  title: string;
  author: string;
  yearRead: number;
  rating: number;
  cover?: string;
};

export const books: Book[] = [
  {
    title: "Sorgenfri (Harry Hole #4)",
    author: "Jo Nesbø",
    yearRead: 2025,
    rating: 4,
    cover: "https://covers.openlibrary.org/b/id/13464004-L.jpg",
  },
  {
    title: "Natthuset",
    author: "Jo Nesbø",
    yearRead: 2025,
    rating: 3,
    cover:
      "https://books.google.com/books/content?id=SeYNEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Landet som ble for rikt",
    author: "Martin Bech Holte",
    yearRead: 2025,
    rating: 3,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-ir1ALpxe-medium.jpg?w=400&f=webp",
  },
  {
    title: "Rødstrupe",
    author: "Jo Nesbø",
    yearRead: 2025,
    rating: 4,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-lPLFCMeZ-medium.jpg?w=400&f=webp",
  },
  {
    title: "Søsterklokkene (Hekne, #1)",
    author: "Lars Mytting",
    yearRead: 2025,
    rating: 3,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-tFxLqEAN-medium.jpg?w=400&f=webp",
  },
  {
    title: "A Court of Frost and Starlight (ACOTAR #3.5)",
    author: "Sarah J. Maas",
    yearRead: 2025,
    rating: 3,
    cover: "https://covers.openlibrary.org/b/id/8569939-L.jpg",
  },
  {
    title: "A Court of Wings and Ruin (ACOTAR #3)",
    author: "Sarah J. Maas",
    yearRead: 2025,
    rating: 5,
    cover: "https://covers.openlibrary.org/b/id/8506724-L.jpg",
  },
  {
    title: "Kakerlakkene (Harry Hole #2)",
    author: "Jo Nesbø",
    yearRead: 2025,
    rating: 4,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-aUit3PoL-medium.jpg?w=400&f=webp",
  },
  {
    title: "Da vi var yngre",
    author: "Oliver Lovrenski",
    yearRead: 2025,
    rating: 4,
    cover:
      "https://books.google.com/books/content?id=iHkYEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "A Court of Mist and Fury (ACOTAR #2)",
    author: "Sarah J. Maas",
    yearRead: 2025,
    rating: 5,
    cover: "https://covers.openlibrary.org/b/id/14315081-L.jpg",
  },
  {
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    yearRead: 2025,
    rating: 3,
    cover: "https://covers.openlibrary.org/b/id/10138333-L.jpg",
  },
  {
    title: "Svøm med dem som drukner",
    author: "Lars Mytting",
    yearRead: 2025,
    rating: 4,
    cover:
      "https://covers.openlibrary.org/b/id/14563308-L.jpghttps://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-zTxoSI2F-medium.jpg?w=400&f=webp",
  },
  {
    title: "Small Things Like These",
    author: "Claire Keegan",
    yearRead: 2025,
    rating: 4,
    cover: "https://covers.openlibrary.org/b/id/10507091-L.jpg",
  },
  {
    title: "Forgotten on Sunday",
    author: "Valérie Perrin",
    yearRead: 2025,
    rating: 4,
    cover:
      "https://books.google.com/books/content?id=DaymEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "A Court of Thorns and Roses (ACOTAR #1)",
    author: "Sarah J. Maas",
    yearRead: 2024,
    rating: 4,
    cover: "https://covers.openlibrary.org/b/id/8738585-L.jpg",
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    yearRead: 2024,
    rating: 4,
    cover: "https://covers.openlibrary.org/b/id/8747160-L.jpg",
  },
  {
    title: "Flaggermusmannen (Harry Hole #1)",
    author: "Jo Nesbø",
    yearRead: 2024,
    rating: 3,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-JDVPv3tq-medium.jpg?w=400&f=webp",
  },
  {
    title: "Vi begynner med slutten",
    author: "Chris Whitaker",
    yearRead: 2024,
    rating: 2,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-WKVYwcwg-medium.jpg?w=400&f=webp",
  },
  {
    title:
      "Lungeflyteprøven – forsvar for en ung kvinne som var mistenkt for spedbarnsdrap",
    author: "Tore Renberg",
    yearRead: 2024,
    rating: 2,
    cover:
      "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-bd7ovmJ7-medium.jpg?w=400&f=webp",
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    yearRead: 2024,
    rating: 5,
    cover: "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-XcgQOt4Q-medium.jpg?w=400&f=webp",
  },
  {
    title: "Der Krepsene Synger",
    author: "Delia Owens",
    yearRead: 2024,
    rating: 5,
    cover: "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-VKJ9lvrg-medium.jpg?w=400&f=webp",
  },
  {
    title: "De Tre",
    author: "Valérie Perrin",
    yearRead: 2024,
    rating: 4,
    cover: "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-iQrcvD9W-medium.jpg?w=400&f=webp",
  },
  {
    title: "Å vanne blomster om kvelden",
    author: "Valérie Perrin",
    yearRead: 2024,
    rating: 5,
    cover: "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-Cl_28GyM-medium.jpg?w=400&f=webp",
  },
];
