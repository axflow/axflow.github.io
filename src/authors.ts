type AuthorType = {
  name: string;
  handle: string;
  avatar: string;
  website: string;
};

const authors: Record<string, AuthorType> = {
  nicholas: {
    name: "Nicholas Charriere",
    handle: "nichochar",
    avatar:
      "https://pbs.twimg.com/profile_images/1662264495077748736/C5QwHjvR_400x400.jpg",
    website: "https://nicholascharriere.com",
  },
  ben: {
    name: "Ben Reinhart",
    handle: "benjreinhart",
    avatar:
      "https://pbs.twimg.com/profile_images/1686425375143006208/foua8ceA_400x400.jpg",
    website: "https://benreinhart.com",
  },
};

function getAuthorOrThrow(name: string): AuthorType {
  const author = authors[name];

  if (!author) {
    throw new Error(`No author for name ${name}`);
  }

  return author;
}

export function getAuthors(nameOrList: string | string[]): AuthorType[] {
  if (typeof nameOrList === "string") {
    return [getAuthorOrThrow(nameOrList)];
  }

  return nameOrList.map(getAuthorOrThrow);
}
