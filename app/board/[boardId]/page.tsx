import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

type BoardIdPageProps = {
  params: {
    boardId: string;
  };
};

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {
  return (
    <Room
      roomId={params.boardId}
      fallback={<Loading></Loading>}
    >
      <Canvas boardId={params.boardId}></Canvas>
    </Room>
  );
};

export default BoardIdPage;
