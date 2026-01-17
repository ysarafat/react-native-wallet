import { useCallback, useState } from "react";
import { Alert } from "react-native";
const API_URL = "https://react-native-wallet-eight.vercel.app/api";

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);
  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchSummary, fetchTransactions, userId]);

  const deleteTransaction = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setSummary(data);
      setIsLoading(false);
      Alert.alert("Transaction deleted successfully.");
    } catch (error) {
      setIsLoading(false);
      Alert.alert(error.message);
    }
  };
  return {
    transactions,
    summary,
    loadData,
    isLoading,
    deleteTransaction,
  };
};
