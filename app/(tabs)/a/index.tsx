import React from "react";
import {
  View,
  Image,
  ScrollView,
  Platform,
  ViewStyle,
  StyleProp,
} from "react-native";
import { useTheme, Chip, Button, Divider } from "react-native-paper";
import { useDesign } from "../../../contexts/designContext";
import { useBlog } from "../../../hooks/useBlog";
import {
  H1,
  H2,
  Subtitle,
  Body,
  BodySmall,
  Caption,
  Overline,
} from "../../../components/atom/text";

type CardVariant = "elevated" | "outlined";

function CardBox({
  children,
  variant = "elevated",
  radius = 12,
  style,
  bg,
  borderColor,
}: {
  children: React.ReactNode;
  variant?: CardVariant;
  radius?: number;
  style?: StyleProp<ViewStyle>;
  bg: string;
  borderColor: string;
}) {
  return (
    <View
      style={[
        { borderRadius: radius, backgroundColor: "transparent" },
        variant === "elevated"
          ? Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOpacity: 0.16,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
              },
              android: { elevation: 3 },
              default: { elevation: 3 },
            })
          : { borderWidth: 1, borderColor },
        style,
      ]}
    >
      <View
        style={{
          backgroundColor: bg,
          borderRadius: radius,
          overflow: "hidden",
        }}
      >
        {children}
      </View>
    </View>
  );
}

function CardBody({
  children,
  paddingV = 12,
  gap = 8,
}: {
  children: React.ReactNode;
  paddingV?: number;
  gap?: number;
}) {
  return <View style={{ gap, paddingVertical: paddingV }}>{children}</View>;
}

export default function Home() {
  const { colors } = useTheme();
  const { tokens } = useDesign();
  const { featured, posts } = useBlog();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          padding: tokens.spacing.lg,
          gap: tokens.spacing.lg,
        }}
      >
        <View style={{ gap: tokens.spacing.xs }}>
          <Overline muted>BLOG</Overline>
          <H1 color={colors.primary}>Latest stories & guides</H1>
          <Subtitle color={colors.onSurfaceVariant}>
            Practical tips for React Native, Paper, and design systems.
          </Subtitle>
          <Caption color={colors.onSurfaceVariant}>
            Practical tips for React Native, Paper, and design systems.
          </Caption>
        </View>

        <CardBox
          variant="elevated"
          radius={tokens.radii.lg}
          bg={colors.surface}
          borderColor={colors.outlineVariant}
          style={{ overflow: "visible" }}
        >
          <Image
            source={{ uri: featured.cover }}
            style={{ width: "100%", height: 180 }}
            resizeMode="cover"
          />
          <View style={{ paddingHorizontal: tokens.spacing.md }}>
            <CardBody paddingV={tokens.spacing.md} gap={tokens.spacing.md}>
              <View
                style={{
                  flexDirection: "row",
                  gap: tokens.spacing.xs,
                  flexWrap: "wrap",
                }}
              >
                {featured.tags.map((t) => (
                  <Chip key={t} compact>
                    {t}
                  </Chip>
                ))}
              </View>
              <H2>{featured.title}</H2>
              <Body color={colors.onSurfaceVariant}>{featured.excerpt}</Body>
              <View
                style={{
                  flexDirection: "row",
                  gap: tokens.spacing.xs,
                  alignItems: "center",
                }}
              >
                <Body weight="semibold">{featured.author}</Body>
                <BodySmall color={colors.onSurfaceVariant}>
                  • {featured.date}
                </BodySmall>
              </View>
              <Button mode="contained" onPress={() => {}}>
                Read featured
              </Button>
            </CardBody>
          </View>
        </CardBox>

        <Divider style={{ backgroundColor: colors.outlineVariant }} />

        <View style={{ gap: tokens.spacing.md }}>
          {posts.map((p) => (
            <CardBox
              key={p.id}
              variant="outlined"
              radius={tokens.radii.lg}
              bg={colors.surface}
              borderColor={colors.outlineVariant}
            >
              <View style={{ paddingHorizontal: tokens.spacing.md }}>
                <CardBody paddingV={tokens.spacing.md} gap={tokens.spacing.sm}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: tokens.spacing.xs,
                      flexWrap: "wrap",
                    }}
                  >
                    {p.tags.map((t) => (
                      <Chip key={t} compact>
                        {t}
                      </Chip>
                    ))}
                  </View>
                  <H2>{p.title}</H2>
                  <Body color={colors.onSurfaceVariant}>{p.excerpt}</Body>
                  <View
                    style={{
                      marginTop: tokens.spacing.xs,
                      flexDirection: "row",
                      gap: tokens.spacing.xs,
                      alignItems: "center",
                    }}
                  >
                    <Body weight="semibold">{p.author}</Body>
                    <BodySmall color={colors.onSurfaceVariant}>
                      • {p.date}
                    </BodySmall>
                  </View>
                  <Button mode="text" onPress={() => {}}>
                    Read more
                  </Button>
                </CardBody>
              </View>
            </CardBox>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
