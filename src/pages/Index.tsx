import { useEffect, useState } from "react";
import { Card, Flex } from "@mantine/core";

import { useNostr } from "@/context/NostrContext";
import { Column } from "@/components/Column";

export const IndexPage = (): JSX.Element | undefined => {
  const nostr = useNostr();
  return (
    <Flex
      justify="stretch"
      gap={8}
      direction="row"
      wrap="nowrap"
      align="stretch"
    >
      <Column title={"HOME"} width={400}>
        <Card withBorder>Hello</Card>
      </Column>
      <Column title={"HOME"} width={400}>
        <Card withBorder>Hello</Card>
      </Column>
      <Column title={"HOME"} width={400}>
        <Card withBorder>Hello</Card>
      </Column>
    </Flex>
  );
};
