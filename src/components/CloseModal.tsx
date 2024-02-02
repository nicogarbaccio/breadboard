"use client";

import { X } from "lucide-react";
// import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/Button";

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  //   const router = useRouter();

  const handleCloseModal = () => {
    const previousUrl = document.referrer;

    if (
      previousUrl &&
      !previousUrl.includes("/sign-in") &&
      !previousUrl.includes("/sign-up")
    ) {
      window.location.href = previousUrl;
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      onClick={handleCloseModal}
    >
      <X aria-label="close modal" className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
