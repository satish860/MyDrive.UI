import { useUser } from "@auth0/nextjs-auth0/client";
import { Center, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  const { user, error, isLoading } = useUser();

  return user ? (
    <div>
      <img src={user.picture!} alt={user.name!} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <Center height="100vh">
      <Stack spacing={4} align="center">
        <Text fontSize="4xl">My Drive</Text>
        <Text width="70%" align="center">
          Sign in to get Unlimted storage for your life time.
        </Text>
        <a href="/api/auth/login">Login</a>
      </Stack>
    </Center>
  );
}
