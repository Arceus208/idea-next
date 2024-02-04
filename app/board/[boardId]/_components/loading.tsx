import { Loader } from "lucide-react";

import { InfoSkeleton } from "./info";
import {
  Participants,
  ParticipantsSkeleton,
} from "./participants";
import {
  Toolbar,
  ToolbarSkeleton,
} from "./toolbar";

export const Loading = () => {
  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin"></Loader>
      <InfoSkeleton></InfoSkeleton>
      <ParticipantsSkeleton></ParticipantsSkeleton>
      <ToolbarSkeleton></ToolbarSkeleton>
    </main>
  );
};
