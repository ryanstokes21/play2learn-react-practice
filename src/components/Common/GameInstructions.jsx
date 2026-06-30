function GameInstructions({ instructions }) {
  return (
    <div>
      <ol>
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default GameInstructions;
