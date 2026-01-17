import { styles } from "@/assets/styles/home.styles";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BalanceCard from "../../components/BalanceCard";
import PageLoader from "../../components/PageLoader";
import { SignOutButton } from "../../components/SignOutButton";
import { useTransactions } from "../../hooks/useTransactions";

export default function Page() {
  const { user } = useUser();
  const userId = user?.id;

  const { transactions, summary, loadData, isLoading, deleteTransaction } =
    useTransactions(userId);
  useEffect(() => {
    loadData();
  }, [loadData]);

  if (isLoading) return <PageLoader />;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* header */}
        <View style={styles.header}>
          {/* Header left */}
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* header right */}
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push("/create")}
            >
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>
        {/* balance card */}
        <BalanceCard summary={summary} />
      </View>
    </View>
  );
}
