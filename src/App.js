import { Route,Routes} from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./Components/layout/Layout";



function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<AllMeetupsPage />} />
                <Route path="/new-meetup" element={<NewMeetupPage />} />
                <Route exact path="/favs" element={<FavoritesPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
