import chance from "chance";

export const createChat = () => {
  return {
    id: chance().fbid(),
    createAt: chance().date({ string: true, american: false }),
    author: chance().name(),
    title: chance().sentence()
  };
};


export const MOCK_CHATS = createChat(5);
