import { Route, Routes } from "react-router-dom";
import {Layout} from "./components/Layout";
import { Profile } from "./routes/Profile";
import { Chat } from "./routes/Chat";
import { NotFound } from "./routes/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/profile" element={<Profile/>} />
          <Route path="/chats" element={<Chat/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
