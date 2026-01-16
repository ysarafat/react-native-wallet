import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Image
        source={{
          uri: "https://www.yeasir.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fysarafat.5b0c2f10.jpg&w=1920&q=75",
        }}
        style={{
          width: "100%",
          height: 300,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <Link
        href="https://yeasir.me"
        style={{
          backgroundColor: "#000000",
          borderRadius: 5,
          width: "100%",
          paddingVertical: 6, // top + bottom
          paddingHorizontal: 10, // left + right
        }}
        className="text-red"
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Visit My Portfolio
        </Text>
      </Link>
    </View>
  );
}
