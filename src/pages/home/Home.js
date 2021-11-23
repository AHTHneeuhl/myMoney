import TransactionForm from "./components/TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Home.module.css";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
