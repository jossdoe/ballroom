import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import IndexPage from 'pages/IndexPage';
import ArticlePage from 'pages/ArticlePage';
import ReviewPage from 'pages/ReviewPage';
import NewsPage from 'pages/NewsPage';
import ReviewsPage from 'pages/ReviewsPage';
import Error404 from 'pages/Error404';

import { Content } from './App.styled';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Switch>
          <Route path="/news/:id">
            <ArticlePage />
          </Route>
          <Route path="/reviews/:id">
            <ReviewPage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/reviews">
            <ReviewsPage />
          </Route>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/404">
            <Error404 />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Content>
      <Footer />
    </>
  );
}

export default App;
