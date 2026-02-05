import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import PostList from './pages/PostList';
import Login from './pages/Login';
import Register from './pages/Register';

const PostDetails = lazy(() => import('./pages/PostDetails'));
const CreateEditPost = lazy(() => import('./pages/CreateEditPost'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={styles.app}>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/posts/create" element={<CreateEditPost />} />
              <Route path="/posts/edit/:id" element={<CreateEditPost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
};

export default App;
