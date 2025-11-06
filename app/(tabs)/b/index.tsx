import React from "react";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useThemeToggle } from "../../../contexts/themeContext";
import { useDesign } from "../../../contexts/designContext";
import {
  useToast,
  useAlert,
  useConfirm,
  useModal,
} from "../../../hooks/useOverlay";

export default function About() {
  const { colors } = useTheme();
  const { tokens } = useDesign();
  const { isDark, toggle } = useThemeToggle();

  const toast = useToast();
  const { alert } = useAlert();
  const confirm = useConfirm();
  const { modal, dismissModal } = useModal();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: tokens.spacing.lg,
        gap: tokens.spacing.md,
        backgroundColor: colors.background,
      }}
    >
      <Button
        mode="contained"
        onPress={() =>
          toast({
            message: "Saved successfully",
            variant: "info",
            duration: 2000,
          })
        }
      >
        Show Toast
      </Button>

      <Button
        mode="contained"
        onPress={() =>
          alert({
            title: "Heads up",
            message: "This is a simple one-button alert.",
            variant: "info",
          })
        }
      >
        Show Alert
      </Button>

      <Button
        mode="contained"
        onPress={async () => {
          const ok = await confirm({
            title: "Proceed?",
            message: "This will overwrite existing data.",
            okText: "Proceed",
            cancelText: "Cancel",
          });
          toast(ok ? "User confirmed ✅" : "User cancelled ❌");
        }}
      >
        Show Confirm
      </Button>

      <Button
        mode="contained"
        onPress={() =>
          modal({
            dismissible: true,
            content: (
              <View
                style={{ padding: tokens.spacing.lg, gap: tokens.spacing.md }}
              >
                <Text variant="titleMedium">Custom Modal</Text>
                <Text
                  variant="bodyMedium"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Put any React content here (forms, lists, etc.).
                </Text>
                <Button mode="contained" onPress={dismissModal}>
                  Close
                </Button>
              </View>
            ),
          })
        }
      >
        Show Modal
      </Button>

      <Button mode="text" onPress={toggle}>
        Toggle Theme (now: {isDark ? "Dark" : "Light"})
      </Button>
    </View>
  );
}
