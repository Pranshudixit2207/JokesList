export class JokesModel {
    Jokes: Array<JokesObj>;
    isPanch: boolean;
}
export interface JokesObj {
id: number;
type: string;
setup: string;
punchline: string;
}
