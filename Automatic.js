/*

        HOW TO USE
    ==================
    コンソールにこのコー
    ドを張り付ける。
    エンターを押す。
    あとは勝手にやってく
    れます。

*/
function performClicks() {
    try {
      document.querySelector('.MuiBox-root.mui-style-56sg73 button').click();
    } catch (error) {
      console.error("Error clicking the first button:", error);
    }
  
    try {
      const elements = document.querySelectorAll('.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.mui-style-1fcd8z4');
      elements.forEach(element => {
        if (element) {
          element.click();
        }
      });
    } catch (error) {
      console.error("Error clicking text buttons:", error);
    }
  
    setTimeout(() => {
      try {
        const buttons = document.querySelectorAll('.MuiButtonBase-root.mui-style-n26i05');

        buttons[1].click();

      } catch (error) {
        console.error("Error clicking the 解答する button:", error);
      }
    }, 1000);
    
  
    setTimeout(() => {
      try {
        document.querySelector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.mui-style-1eb6wkk').click();
      } catch (error) {
        console.error("Error clicking the last button:", error);
      }
    }, 5000);
}

setInterval(performClicks, 8000);
