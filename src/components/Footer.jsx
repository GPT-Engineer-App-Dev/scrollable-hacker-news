import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} textAlign="center" borderTop="1px solid" borderColor="gray.200" mt={4}>
      <Text fontSize="sm">
        © {new Date().getFullYear()} Hacker News. All rights reserved.
      </Text>
      <Text fontSize="sm">
        <Link href="https://news.ycombinator.com" isExternal color="teal.500">
          Visit Hacker News
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;