import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { Text, View } from "react-native";

const BalanceCard = ({ summary }) => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>
        &#2547;{parseFloat(summary?.balance).toFixed(2)}
      </Text>
      <View style={styles.balanceStats}>
        {/* income */}
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            +&#2547;{parseFloat(summary?.income).toFixed(2)}
          </Text>
        </View>
        {/* divider */}
        <View style={styles.divider} />
        {/* expense */}
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expense</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -&#2547;{parseFloat(summary?.expense).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;
