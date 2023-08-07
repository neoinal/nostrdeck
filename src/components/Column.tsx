import {
  ActionIcon,
  Box,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  createStyles,
  px,
  rem,
} from "@mantine/core";
import { IconDotsVertical, IconHome2 } from "@tabler/icons-react";
import { PropsWithChildren, useRef } from "react";

type Props = { title: string; width: number } & PropsWithChildren;

const useStyles = createStyles((theme) => ({
  header: {
    height: rem(48),
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    fontSize: theme.fontSizes.md,
  },
  headerTitle: {
    textOverflow: "clip",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  body: {
    height: `calc(100vh - ${rem(50)})`,
  },
}));

export const Column = ({ title, width, children }: Props): JSX.Element => {
  const { classes } = useStyles();
  const viewport = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    viewport.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Card
      w={width}
      radius="sm"
      m={0}
      withBorder
      sx={{
        flexShrink: 0,
      }}
    >
      <Card.Section withBorder py="xs" className={classes.header}>
        <Grid px="xs">
          <Grid.Col
            span="auto"
            onClick={scrollToTop}
            sx={{ cursor: "pointer" }}
          >
            <Center my="auto">
              <IconHome2 />
              <Text ml={8}>{title}</Text>
            </Center>
          </Grid.Col>
          <Grid.Col span="content">
            <ActionIcon
              variant="outline"
              onClick={() => console.log("Click Dots Button")}
            >
              <IconDotsVertical size={16} />
            </ActionIcon>
          </Grid.Col>
        </Grid>
        {/* <Group
          position="apart"
          noWrap
          px={8}
          onClick={scrollToTop}
          sx={{ cursor: "pointer" }}
        >
          <Center my="auto">
            <IconHome2 />
            <Text ml={8}>HOME</Text>
          </Center>
          <ActionIcon
            variant="outline"
            onClick={() => console.log("Click Dots Button")}
          >
            <IconDotsVertical size={16} />
          </ActionIcon>
        </Group> */}
      </Card.Section>
      <Card.Section>
        {/* <div style={{ position: "relative", height: "100%" }}> */}
        <ScrollArea
          className={classes.body}
          type="always"
          scrollbarSize={8}
          viewportRef={viewport}
        >
          {/* <Box w={width}>{children}</Box> */}
          <Box w="100%">{children}</Box>
        </ScrollArea>
        {/* </div> */}
      </Card.Section>
    </Card>
  );
};
