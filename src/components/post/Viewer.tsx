"use client";

import styled from "styled-components";
import { MDXRemote } from "next-mdx-remote";
import { Post } from "@/services/post";

interface Props {
  postData: Post;
}

function PostViewer({ postData }: Props) {
  return (
    <>
      <StyledPostViewer>
        <header className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-categories">
            {postData.categories.map((category) => {
              return <div key={category}>{category}</div>;
            })}
          </div>
          <div className="post-date">{postData.date.toISOString()}</div>
        </header>
        <div className="post-content">
          <MDXRemote {...postData.mdx} />
        </div>
      </StyledPostViewer>
    </>
  );
}

const StyledPostViewer = styled.article`
  .post-header {
    text-align: center;
    margin-bottom: 60px;
    .post-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .post-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .post-date {
      margin-top: 12px;
      color: #666;
      font-size: 14px;
    }
  }
`;

export default PostViewer;
