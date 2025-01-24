import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
import MainLayout from "./pages/layout/mainLayout";
import ChatList from "./components/chatList";
import Login from "./pages/login/LoginPage";
import Signup from "./pages/signup/SignupPage";
import Profile from "./pages/profile/Profile";

// Pages
const Home = () => (
  <div>
    <Hero />
  </div>
);

// Hero Component
const Hero = () => (
  <div className="">
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Bienvenue sur notre plateforme
      </h1>
      <p className="text-lg text-gray-300 mb-6">Le renouveau de MSN en 2025</p>
      <div>
        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-4"
        >
          S'inscrire
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Se connecter
        </Link>
      </div>
    </section>
  </div>
);

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<ChatList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
