"use client";

import Link from "next/link";
import styled from "styled-components";
import { Post } from "@/services/post";

type Props = {
  postList: Post[];
};

function PostList({ postList }: Props) {
  return (
    <StyledPostList>
      {postList.map((post) => {
        return (
          <div key={post.slug} className="post-item">
            <Link href={`/post/${post.slug}`} className="title">
              {post.title}
            </Link>
            <div className="date">{post.date.toISOString()}</div>
            <div className="categories">
              {post.categories.map((category) => {
                return <div key={category}>{category}</div>;
              })}
            </div>
          </div>
        );
      })}
    </StyledPostList>
  );
}

const StyledPostList = styled.div`
  display: grid;
  .post-item {
    padding: 30px 0;
    border-bottom: 1px solid #dddddd;
    &:first-child {
      border-top: 1px solid #dddddd;
    }
    .title {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        color: #1f883d;
      }
    }
    .date {
      font-size: 14px;
      margin-top: 6px;
      color: #666;
    }
    .categories {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
    }
  }
`;

export default PostList;
