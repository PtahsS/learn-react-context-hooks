import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import SongTitle from "./components/SongTitle";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      <SongTitle />
      <SongList />
    </div>
  );
}

export default App;
