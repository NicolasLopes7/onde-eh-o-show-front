import { useQuery } from "@apollo/client/react";
import { EVENTS_BY_ARTIST } from "../../services/Apollo/queries";
import { Image } from "../Image";
import { Box, Text } from "../Primitives";
import { Skeleton } from "../Skeleton";
import { EventsInfo } from "./EventsInfo";
import { EventsInfoSkeleton } from "./EventsInfoSkeleton";

interface ArtistCardProps {
  id: string;
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export type EventsByArtist = {
  eventsByArtist: {
    name: string;
    date: Date;
    venue: string;
    link: string;
    purchaseDueDate: Date;
    price: number;
  }[];
};

export function ArtistCard({
  id,
  image: { height, url, width },
  name,
}: ArtistCardProps) {
  const { data, loading, error } = useQuery<EventsByArtist>(EVENTS_BY_ARTIST, {
    variables: {
      artistId: id,
    },
  });

  return (
    <Box
      css={{
        display: "flex",
        bgColor: "$slate4",
        gap: "$4",
      }}
    >
      <Image
        css={{
          w: "100%",
          maxW: "30%",
        }}
        src={url}
        width={width}
        height={height}
        alt={name}
        skeleton={true}
        objectFit="cover"
      />
      <Box
        css={{
          display: "flex",
          flexDir: "column",
          gap: "$4",
          p: "$4",
        }}
      >
        <Skeleton isLoaded={!loading}>
          <Text css={{ fontWeight: "bold", fontSize: "large" }}>{name}</Text>
        </Skeleton>
        <Skeleton customSkeleton={EventsInfoSkeleton} isLoaded={!loading}>
          <EventsInfo data={data!} />
        </Skeleton>
      </Box>
    </Box>
  );
}
