export const AI = () => {
 const push = async () => {
  try {
    const response = await fetch("https://umairrinde.pythonanywhere.com/api/script/key=button_click");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  return (
    <div>
      <h1>AI Solutions</h1>
      <p>Welcome to the AI Solutions page!</p>
      <button id='btn' className="click">
        click
        </button>
    </div>
  );
};
