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
        <a href="https://www.amazon.com/ASUS-Vivobook-Windows-Transparent-M515DA-WS33/dp/B0CRDCFNHW/ref=sr_1_8?_encoding=UTF8&content-id=amzn1.sym.7d5cde1d-b3d4-4ca8-a1cf-489ba1530c6b&dib=eyJ2IjoiMSJ9.QxMIxAz7fJ3OeiAZsIF-Q_rJRMmDbDH07WsGPllz99UuzM1Sya_H-MKZGH3shZ-EQ4vgzxCQSBN3qQM2QeLZ3vw4h3pxzBl6_0cI5j0QbvOM10uajOzjYeMIB1y8CSAq02eCIBPDSqg7dgXGt7C-CD10dO5hVFoxi8Ty-7WsXRbOx6gLILaDxS1Z85uXaLkl6S52EP8_J1MRxRgoYpdOl7VLE03e4UBM18jP3zXZ-OM.Wp2kncacVD94-ihZrCDAPUsEnCclX8rpqFeCont3teE&dib_tag=se&keywords=laptops+and+accessories&pd_rd_r=809ab61e-5c77-4f88-8c0c-93d4577ed90c&pd_rd_w=5BK8B&pd_rd_wg=cYftI&pf_rd_p=7d5cde1d-b3d4-4ca8-a1cf-489ba1530c6b&pf_rd_r=DDHSDQN8AV4X5CFN2E1E&qid=1719553528&sr=8-8" target="blank">
        Click
        </a>
        </button>
    </div>
  );
};
