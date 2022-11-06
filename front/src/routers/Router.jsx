import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/Spinner';
import PostProvider from '../contexts/PostContext';
const Register = React.lazy(() => import('../pages/register/Register'))
const Chat = React.lazy(() => import('../pages/chat/Chat'))
const ChatContent = React.lazy(() => import('../pages/chat/ChatContent'))
const Login = React.lazy(() => import('../pages/Login'))
const Dashboard = React.lazy(() => import('../pages/Dashboard'))
const Posts = React.lazy(() => import('../pages/posts/Posts'))


function Router() {

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PostProvider>
          <Routes>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/register" element={<Register />}> </Route>
            <Route path="/posts" element={<Posts />}> </Route>
            <Route path="/chat" element={<Chat />}>
              <Route path=":username" element={<ChatContent />}> </Route>
            </Route>
            <Route path="/dashboard/:username" element={<Dashboard />}> </Route>
            <Route path="*" element={<h1>Not Found...</h1>}> </Route>
          </Routes>
        </PostProvider>
      </Suspense>
    </>
  )
}

export default Router;
