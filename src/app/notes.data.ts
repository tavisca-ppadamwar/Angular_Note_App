interface NInterface {
  id: number;
  time: number;
  title: string;
  content: string;
  like:number;
}

// tslint:disable-next-line:no-empty-interface
interface NotesInterface extends Array<NInterface> {}

const notes: NotesInterface = [];

export default notes;
