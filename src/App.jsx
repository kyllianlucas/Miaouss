import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
const Home = () => (
  <div >
    <Hero />
  </div>
);

const Login = () => <h1 className="text-2xl font-bold text-center mt-10">Login</h1>;
const Register = () => <h1 className="text-2xl font-bold text-center mt-10">Register</h1>;

// Hero Component
const Hero = () => (

  <div className="">
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-4">Bienvenue sur notre plateforme</h1>
      <p className="text-lg text-gray-300 mb-6">Le renouveau de MSN en 2025</p>
      <div>
        <Link to="/register" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-4">S'inscrire</Link>
        <Link to="/login" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">Se connecter</Link>
      </div>

      
    </section>
  </div>
);

// App Component
function App() {
  return (
    <Router>
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      
    </Router>
  );
}

export default App;
