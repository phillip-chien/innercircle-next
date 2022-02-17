import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { formatDistanceToNow, parse } from "date-fns";
import PostItemCollectionInfo from "./PostItemCollectionInfo";
import PostItemInsideScoop from "./PostItemInsideScoop";
import ReactMarkdown from "react-markdown";
type Props = {
  post: any;
};
const PostItem: React.FC<Props> = ({ post }) => {
  const createdDate = parse(post.created_at, "yyyy-MM-dd", new Date());
  return (
    <VStack my={10}>
      <Box w={"100%"} px={4} fontSize={"lg"} fontWeight={"bold"}>
        {post.created_at} - {formatDistanceToNow(createdDate)} ago
      </Box>
      <PostItemCollectionInfo post={post} />
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      <PostItemInsideScoop post={post} />
    </VStack >
  );
};

export default PostItem;
