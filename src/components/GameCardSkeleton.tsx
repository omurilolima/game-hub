import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody width="280px">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
