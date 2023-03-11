import ky from "ky";

const url = 'https://raw.githubusercontent.com/obvious/take-home-exercise-data/trunk/'
export const Fetcher = ky.create({prefixUrl: url});