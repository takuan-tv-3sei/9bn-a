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
      const firstButton = document.querySelector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.mui-style-1hurhja');
      if (firstButton) {
        firstButton.click();
      }
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
        const elements = document.querySelectorAll('p.MuiTypography-root.MuiTypography-body1.mui-style-19x4g8o');
        elements.forEach(i => {
          if (i && i.textContent.includes('解答する')) {
            const button = i.closest('button');
            if (button) {
              button.click();
            }
          }
        });
      } catch (error) {
        console.error("Error clicking the 解答する button:", error);
      }
    }, 1000);
  
    setTimeout(() => {
      try {
        const lastButton = document.querySelector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.mui-style-1xon4mv');
        if (lastButton) {
          lastButton.click();
        }
      } catch (error) {
        console.error("Error clicking the last button:", error);
      }
    }, 5000);
}

setInterval(performClicks, 8000);
