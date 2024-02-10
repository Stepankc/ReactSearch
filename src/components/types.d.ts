interface character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'male' | 'female' | 'n/a';
}

interface characterProps extends character {
  image: string;
}

interface UnsplashResult {
  urls: {
    regular: string;
  };
}

interface SearchBarProps {
  onSearch: (name: string) => void;
}
