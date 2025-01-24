import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function PostItem({ post }) {
  useEffect(() => {
    console.log(post);
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.users.userName}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter>
        <p>{post.creationDate}</p>
      </CardFooter>
    </Card>
  );
}
