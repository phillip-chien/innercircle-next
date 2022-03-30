import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  image_url: string;
};

const ProfilePicture: React.FC<Props> = ({ image_url }) => {
  return (

    <Box
      borderRadius={"50%"}
      overflow="hidden"
      border="2px"
      borderColor={"white"}
      width={100}
      height={100}
    >
      <Image
        src={image_url || '/default_gray.png'} // under public folder
        objectFit={'cover'}
        width={100}
        height={100}
      />
    </Box>
  );
};

export default ProfilePicture;

