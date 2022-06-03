import React, { useState } from "react";
import {
  Heading,
  VStack,
  Box,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import ProfilePicture from "../profile/ProfilePicture";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

type Props = {
  insiderCollectionOwnership: any[];
};
const CollectionBackers: React.FC<Props> = ({
  insiderCollectionOwnership,
}: CollectionBackers) => {
  const [showAllBackers, setShowAllBackers] = useState(false);
  let orderedInsiderOwnership = [...insiderCollectionOwnership].sort((a, b) =>
    a.num_tokens > b.num_tokens ? -1 : 1
  );
  return (
    <VStack py={10}>
      <Heading as={"h2"} fontSize="x-large">
        Notable Collectors ({orderedInsiderOwnership.length})
      </Heading>
      <Grid
        // templateColumns={isBigScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'}
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={3}
        py={4}
      >
        {orderedInsiderOwnership
          .slice(0, showAllBackers ? orderedInsiderOwnership.length : 4)
          .map((i) => (
            <GridItem key={i.insider_id}>
              <Link href={`/profile/${i.insider_id}`} isExternal>
                <Box
                  p={6}
                  maxW={"200px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                  _hover={{
                    marginTop: "-1",
                    marginLeft: "-1",
                  }}
                >
                  <Flex
                    height={"180px"}
                    flexDirection={"column"}
                    fontWeight={"bold"}
                  >
                    <ProfilePicture image_url={i.insider.opensea_image_url} />
                    <Text mt={2} maxW="100%" overflow={"hidden"}>
                      {i.insider.opensea_display_name || "unknown"}
                    </Text>
                    <Text>Owns: {i.num_tokens}</Text>
                    {i.net_num_token_buy !== 0 && (
                      <Text
                        bgColor={
                          i.net_num_token_buy > 0 ? "green.100" : "red.100"
                        }
                        textColor={i.net_num_token_buy > 0 ? "green" : "red"}
                      >
                        Last 3d: {i.net_num_token_buy}{" "}
                        {i.net_num_token_buy > 0 ? (
                          <TriangleUpIcon />
                        ) : (
                          <TriangleDownIcon />
                        )}
                      </Text>
                    )}
                  </Flex>
                </Box>
              </Link>
            </GridItem>
          ))}
      </Grid>
      <Button
        onClick={() => {
          setShowAllBackers(!showAllBackers);
        }}
      >
        {showAllBackers ? "Show less" : "Show more"}
      </Button>
    </VStack>
  );
};

interface InsiderOwnership {
  num_tokens: number;
  insider_id: string;
  opensea_image_url: string;
  net_num_token_buy: number;
  insider: {
    opensea_image_url: string;
    opensea_display_name: string;
  };
}

interface CollectionBackers {
  insiderCollectionOwnership: Array<InsiderOwnership>;
}

export default CollectionBackers;