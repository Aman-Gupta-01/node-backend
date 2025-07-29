import { lazy, Suspense } from "react";
import Loading from "./Pages/loader/Loading";
const Header = lazy(() => import('@/Pages/header&footer/Header'))
const ChatScreen = lazy(() => import('@/Pages/page/ChatScreen'))

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Header />
      <main className="flex-1 p-4 min-h-[80vh] flex flex-col">
        <ChatScreen />
      </main>
    </Suspense>
    </>
  );
}

export default App;
