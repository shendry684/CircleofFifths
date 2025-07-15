import styles from "./ScalesList.module.css";

const ScalesList = () => {
  const scales = [
    "Major",
    "Natural Minor",
    "Harmonic Minor",
    "Melodic Minor",
    "Dorian",
    "Phrygian",
    "Lydian",
    "Mixolydian",
    "Locrian",
  ];

  return (
    <div className={styles.container}>
      <h2 className="text-2xl font-semibold mb-2">🎼 Available Scales</h2>
      <ul className={styles.list}>
        {scales.map((scale) => (
          <li key={scale} className={styles.listItem}>
            {scale}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScalesList;
