import { Route, Routes } from "react-router-dom";
import {Layout} from "./components/Layout";
import { Profile } from "./routes/Profile";
import { Chat } from "./routes/Chat";
import { NotFound } from "./routes/NotFound";
import {Home} from "./routes/Home";
import {Messages} from "./routes/Messages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route path="/chats" element={<Chat/>} >
            <Route path="/chats/:chatId" element={<Messages/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
