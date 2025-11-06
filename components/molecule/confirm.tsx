import React from "react";
import { View, Pressable, Platform } from "react-native";
import { Button, Text, useTheme, Divider } from "react-native-paper";
import { useDesign } from "../../contexts/designContext";
import type { ConfirmOptions } from "../../contexts/overlayContext";

export function ConfirmDialog({
  visible,
  state,
  onOk,
  onCancel,
}: {
  visible: boolean;
  state: ConfirmOptions | null;
  onOk: () => void;
  onCancel: () => void;
}) {
  const { colors } = useTheme();
  const { tokens } = useDesign();
  if (!visible || !state) return null;

  const okIsDestructive = state.variant === "error";

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        inset: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={onCancel}
        style={{ position: "absolute", inset: 0, backgroundColor: "#00000088" }}
      />

      <View
        style={{
          width: "90%",
          maxWidth: 420,
          borderRadius: tokens.radii.lg,
          backgroundColor: "transparent",
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOpacity: 0.18,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 8 },
            },
            android: { elevation: 6 },
            default: { elevation: 6 },
          }),
        }}
      >
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: tokens.radii.lg,
            overflow: "hidden",
          }}
        >
          {state.title ? (
            <View
              style={{
                padding: tokens.spacing.lg,
                paddingBottom: tokens.spacing.sm,
              }}
            >
              <Text
                variant="titleMedium"
                style={{ color: colors.onBackground }}
              >
                {state.title}
              </Text>
            </View>
          ) : null}

          {state.message ? (
            <View
              style={{
                paddingHorizontal: tokens.spacing.lg,
                paddingBottom: tokens.spacing.lg,
              }}
            >
              <Text
                variant="bodyMedium"
                style={{ color: colors.onSurfaceVariant }}
              >
                {state.message}
              </Text>
            </View>
          ) : null}

          <Divider
            style={{ backgroundColor: colors.outlineVariant, opacity: 0.6 }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: tokens.spacing.xs,
              padding: tokens.spacing.md,
              paddingHorizontal: tokens.spacing.lg,
            }}
          >
            <Button mode="text" onPress={onCancel}>
              {state.cancelText ?? "Cancel"}
            </Button>
            <Button
              mode="contained"
              onPress={onOk}
              textColor={okIsDestructive ? colors.error : undefined}
            >
              {state.okText ?? "OK"}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
