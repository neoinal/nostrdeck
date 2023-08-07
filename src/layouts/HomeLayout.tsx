import {
  ActionIcon,
  AppShell,
  Center,
  Divider,
  Navbar,
  ScrollArea,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import { IconEdit, IconSearch, IconSettings } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

type Props = {} & PropsWithChildren;

const useStyles = createStyles((theme) => ({
  main: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: rem(68),
    margin: 0,
  },
}));

export const HomeLayout = ({ children }: Props): JSX.Element => {
  const { classes } = useStyles();
  const navbar: JSX.Element = (
    <Navbar width={{ base: 60 }}>
      <Navbar.Section my={16}>
        <Stack align="center">
          <ActionIcon variant="filled" size="lg" color="violet">
            <IconEdit size={20} />
          </ActionIcon>
          <ActionIcon variant="outline" size="lg">
            <IconSearch size={20} />
          </ActionIcon>
        </Stack>
      </Navbar.Section>
      <Divider />
      <Navbar.Section grow component={ScrollArea}>
        <Stack></Stack>
      </Navbar.Section>
      <Divider />
      <Navbar.Section my={16}>
        <Stack align="center">
          <ActionIcon size="lg">
            <IconSettings size={20} />
          </ActionIcon>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );

  return (
    <AppShell
      layout="alt"
      p={0}
      navbar={navbar}
      classNames={{
        main: classes.main,
      }}
    >
      <Outlet />
    </AppShell>
  );
};
