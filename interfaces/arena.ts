export interface Arena {
  name: string;
  logo: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
  visited: boolean;
  lat: number;
  lng: number;
}
