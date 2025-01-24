import React from "react";
import InputPostMessage from "../inputPostMessage";
import InputPostStyle from "./inputPostStyle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function InputPostContainer({ user }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Créer un post</CardTitle>
          <CardDescription>Racontez votre vie</CardDescription>
        </CardHeader>
        <CardContent>
          <InputPostMessage user={user} />
        </CardContent>
        <CardFooter>
          <InputPostStyle />
        </CardFooter>
      </Card>
    </>
  );
}

export default InputPostContainer;
