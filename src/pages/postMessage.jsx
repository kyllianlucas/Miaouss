import { useAuth } from "@/authProvider";
import InputPostContainer from "@/components/ui/inputPostContainer";
import React from "react";

function PostMessage() {
  const { user } = useAuth();
  return (
    <>
      <InputPostContainer user={user} />
    </>
  );
}

export default PostMessage;
