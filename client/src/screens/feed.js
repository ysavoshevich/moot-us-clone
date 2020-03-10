import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import openSocket from "socket.io-client";

import { MEDIA_BREAKPOINT } from "../util/constants";
import { useToken, useScreenSize, useUI, useUser } from "../context/";

import InfiniteScroll from "react-infinite-scroll-component";
import { Dialog } from "@material-ui/core";
import Orbitals from "@bit/joshk.react-spinners-css.orbitals";
import Post from "../components/post";
import { NewPostForm } from "../components/forms";
import { WritePostButton } from "../components/buttons";
import Filter from "../components/filter";

const getSocketURL = () =>
  process.env.NODE_ENV === "production"
    ? "https://moot-us-clone.herokuapp.com/"
    : "http://localhost:3001/";

const socket = openSocket(getSocketURL());

const StyledFeed = styled.div`
  width: 600px;
  min-height: 200px;

  margin: 0px auto 100px auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledFeedHeader = styled.div`
  margin: 21px 0px 11px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${MEDIA_BREAKPOINT}px) {
    padding: 10px;
    align-items: center;
    h2 {
      font-size: 20px;
    }
  }
`;

function Feed() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [values, setValues] = useState({
    game: "",
    platform: "",
    region: ""
  });
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { setLogInFormOpen } = useUI();
  const { small } = useScreenSize();
  const { token } = useToken();
  const {
    user: { username }
  } = useUser();

  async function fetchPosts(index, values) {
    try {
      const response = await axios.get(
        `/api/loadPosts?page=${index}&game=${values.game}&region=${values.region}&platform=${values.platform}`
      );
      setIndex(index + 1);
      setPosts([...posts, ...response.data.posts]);
      if (response.data.posts.length === 0) {
        if (index === 1) {
          setPosts([]);
        }
        setHasMore(false);
      }
    } catch (error) {
      setHasMore(false);
    }
  }

  async function fetchPostsWithFilter(index, newValues) {
    try {
      setHasMore(true);
      const response = await axios.get(
        `/api/loadPosts?page=${1}&game=${newValues.game}&region=${
          newValues.region
        }&platform=${newValues.platform}`
      );
      setIndex(2);
      if (response.data.posts.length === 0) {
        setPosts([]);
        setHasMore(false);
      } else {
        setPosts([...response.data.posts]);
      }
    } catch (error) {
      setHasMore(false);
    }
  }

  const handleChange = name => event => {
    fetchPostsWithFilter(1, { ...values, [name]: event.target.value });
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  useEffect(() => {
    fetchPosts(1, { ...values });
  }, []);

  socket.on("posts", data => {
    if (data.action === "create") {
      setPosts([data.post, ...posts]);
    }
  });

  const deletePost = _id => {
    setPosts(posts.filter(post => post._id !== _id));
    axios.post(
      "/api/deletePost",
      { _id, username },
      { headers: { authorization: `Bearer ${token}` } }
    );
  };
  return (
    <StyledFeed>
      <Dialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        fullScreen={small}>
        <NewPostForm closeForm={() => setIsFormOpen(false)} />
      </Dialog>

      <StyledFeedHeader>
        <h2>Looking for group?</h2>
        <WritePostButton
          onClick={() =>
            token ? setIsFormOpen(true) : setLogInFormOpen(true)
          }>
          Write A Post
        </WritePostButton>
      </StyledFeedHeader>
      <Filter values={values} handleChange={handleChange} />
      <InfiniteScroll
        scrollThreshold={0}
        style={{ overflowY: "hidden" }}
        dataLength={posts.length}
        loader={
          <Orbitals
            color="white"
            style={{ display: "block", margin: "auto" }}
          />
        }
        next={() => fetchPosts(index, { ...values })}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            <b>No more posts.</b>
          </p>
        }
        hasMore={hasMore}
        useWindow={false}
        scrollableTarget={window}>
        {posts &&
          posts.map(post => (
            <Post post={post} key={post._id} deletePost={deletePost} />
          ))}
      </InfiniteScroll>
    </StyledFeed>
  );
}

export default Feed;
