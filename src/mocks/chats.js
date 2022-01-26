import { nanoid } from "nanoid";

const createChatMock = (i) => ({
  id: nanoid(),
  label: `name ${i}`
});

export const CHATS = Array.from({ length: 5 }).map((_, i) =>
  createChatMock(i)
);
