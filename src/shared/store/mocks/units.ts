import { Status } from "@/domains/journey/api/@types";
import { chaptersUnit1 } from "./chapters";

export const units = [
  {
    id: '1',
    name: 'Conceitos básicos',
    chapters: chaptersUnit1,
    chaptersCount: 5,
    chaptersAccomplished: 3,
    status: Status.AVAILABLE,
  }
];
